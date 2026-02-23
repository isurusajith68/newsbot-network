#!/usr/bin/env tsx
/**
 * AI Article Generator Script
 * 
 * This script generates a new AI-powered news article daily.
 * It can be run manually or via GitHub Actions cron job.
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { format } from 'date-fns'

interface ArticleData {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  imageUrl: string
  tags: string[]
  views: number
}

// Sample categories for rotation
const CATEGORIES = [
  'AI & ML',
  'Technology', 
  'Business',
  'Hardware',
  'Ethics',
  'Finance',
  'Marketing',
  'Healthcare'
]

// Sample tags
const TAGS = [
  'Artificial Intelligence',
  'Machine Learning',
  'OpenAI',
  'Google',
  'Microsoft',
  'Startup',
  'Funding',
  'Innovation',
  'Technology',
  'Business',
  'Ethics',
  'Research',
  'Development',
  'Future'
]

// Sample image URLs from Unsplash (AI/tech themed)
const IMAGE_URLS = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800'
]

// Sample article templates
const ARTICLE_TEMPLATES = [
  {
    title: 'The Future of {TOPIC}: How AI is Revolutionizing {INDUSTRY}',
    content: `Artificial intelligence is transforming the {INDUSTRY} industry at an unprecedented pace. Recent developments in {TOPIC} have shown remarkable potential to reshape how we approach {INDUSTRY_CHALLENGE}.

Key advancements include:
• Enhanced {FEATURE_1} capabilities
• Improved {FEATURE_2} accuracy
• Reduced {COST_FACTOR} costs

Industry experts predict that within the next {TIMEFRAME}, AI-powered solutions could increase {METRIC} by up to {PERCENTAGE}%. This represents a significant opportunity for businesses willing to embrace these technologies early.

However, challenges remain, particularly around {CHALLENGE_1} and {CHALLENGE_2}. Regulatory frameworks are still evolving, and ethical considerations must be addressed as these technologies become more widespread.

The consensus among analysts is clear: {TOPIC} represents not just an incremental improvement, but a fundamental shift in how {INDUSTRY} operates. Companies that fail to adapt risk being left behind in an increasingly competitive landscape.`
  },
  {
    title: '{COMPANY} Announces Breakthrough in {TECHNOLOGY}',
    content: `In a major announcement today, {COMPANY} revealed significant progress in {TECHNOLOGY} development. The breakthrough addresses long-standing limitations in {PROBLEM_AREA} and could have far-reaching implications for {APPLICATION_AREA}.

Technical details:
• {METRIC_1}: Improved by {IMPROVEMENT_1}%
• {METRIC_2}: Reduced by {REDUCTION}%
• {METRIC_3}: Increased to {VALUE}

{COMPANY_SPOKESPERSON}, {TITLE} at {COMPANY}, stated: "{QUOTE}"

The technology works by {EXPLANATION}. This approach differs from previous methods in that {DIFFERENCE}.

Market reaction has been positive, with {COMPANY} shares rising {PERCENTAGE}% following the announcement. Competitors including {COMPETITOR_1} and {COMPETITOR_2} are expected to respond with their own developments in the coming months.

Looking ahead, {COMPANY} plans to {FUTURE_PLAN_1} and {FUTURE_PLAN_2}. The first commercial applications are expected to launch in {TIMEFRAME}.`
  },
  {
    title: 'New Study Reveals {FINDING} About AI {APPLICATION}',
    content: `A comprehensive study published in {JOURNAL} has uncovered surprising insights about AI {APPLICATION}. The research, conducted by {INSTITUTION}, analyzed {DATA_POINTS} over {TIME_PERIOD}.

Key findings:
1. {FINDING_1}
2. {FINDING_2}
3. {FINDING_3}

{LEAD_RESEARCHER}, the study's lead author, explained: "{RESEARCHER_QUOTE}"

The study's methodology involved {METHODOLOGY}. This approach allowed researchers to {RESEARCH_GOAL}.

Implications for the industry are significant. The findings suggest that {IMPLICATION_1} and {IMPLICATION_2}. This could lead to changes in how {INDUSTRY} approaches {PROCESS}.

However, the researchers caution that {LIMITATION_1} and {LIMITATION_2} mean that further study is needed. They plan to {NEXT_STEPS} in future research.

The full study is available in {JOURNAL_VOLUME}, and the research team has made their data publicly available for peer review and further analysis.`
  }
]

// Fill template with random values
function fillTemplate(template: string, variables: Record<string, string>): string {
  let result = template
  for (const [key, value] of Object.entries(variables)) {
    result = result.replace(new RegExp(`{${key}}`, 'g'), value)
  }
  return result
}

// Generate random article
function generateArticle(): ArticleData {
  const template = ARTICLE_TEMPLATES[Math.floor(Math.random() * ARTICLE_TEMPLATES.length)]
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
  
  // Generate variables based on category
  const variables: Record<string, string> = {
    TOPIC: 'AI Integration',
    INDUSTRY: category.toLowerCase(),
    INDUSTRY_CHALLENGE: 'operational efficiency',
    FEATURE_1: 'predictive analytics',
    FEATURE_2: 'pattern recognition',
    COST_FACTOR: 'operational',
    TIMEFRAME: '2-3 years',
    METRIC: 'productivity',
    PERCENTAGE: '40',
    CHALLENGE_1: 'data privacy',
    CHALLENGE_2: 'algorithmic bias',
    COMPANY: ['OpenAI', 'Google', 'Microsoft', 'Meta', 'Amazon', 'Apple'][Math.floor(Math.random() * 6)],
    TECHNOLOGY: 'Neural Networks',
    PROBLEM_AREA: 'computational efficiency',
    APPLICATION_AREA: 'large-scale data processing',
    METRIC_1: 'Processing Speed',
    IMPROVEMENT_1: '65',
    METRIC_2: 'Energy Consumption',
    REDUCTION: '40',
    METRIC_3: 'Accuracy',
    VALUE: '98.7%',
    COMPANY_SPOKESPERSON: 'Dr. Sarah Chen',
    TITLE: 'Head of Research',
    QUOTE: 'This represents a quantum leap in our ability to process complex data structures while maintaining energy efficiency.',
    EXPLANATION: 'leveraging novel architectural approaches combined with optimized training algorithms',
    DIFFERENCE: 'it focuses on parallel processing at scale',
    COMPETITOR_1: 'DeepMind',
    COMPETITOR_2: 'Anthropic',
    FUTURE_PLAN_1: 'expand research collaborations',
    FUTURE_PLAN_2: 'develop commercial partnerships',
    FINDING: 'unexpected patterns',
    APPLICATION: 'adoption rates',
    JOURNAL: 'Nature AI',
    INSTITUTION: 'Stanford University',
    DATA_POINTS: 'over 10,000 data points',
    TIME_PERIOD: 'the past five years',
    FINDING_1: 'AI adoption follows an S-curve pattern similar to other disruptive technologies',
    FINDING_2: 'Small to medium enterprises are adopting AI faster than previously estimated',
    FINDING_3: 'The biggest barrier to adoption remains talent acquisition, not technology cost',
    LEAD_RESEARCHER: 'Professor Michael Rodriguez',
    RESEARCHER_QUOTE: 'Our findings challenge conventional wisdom about AI adoption timelines and suggest we may be at an inflection point.',
    METHODOLOGY: 'a combination of survey data, financial reports, and patent analysis',
    RESEARCH_GOAL: 'identify patterns and correlations that weren\'t apparent in smaller studies',
    IMPLICATION_1: 'accelerated investment in AI education and training programs',
    IMPLICATION_2: 'reassessment of market opportunity timelines',
    PROCESS: 'talent development and technology deployment',
    LIMITATION_1: 'the study focused primarily on North American and European markets',
    LIMITATION_2: 'long-term effects remain to be seen',
    NEXT_STEPS: 'expand the study to include emerging markets',
    JOURNAL_VOLUME: 'Volume 12, Issue 3'
  }

  const title = fillTemplate(template.title, variables)
  const content = fillTemplate(template.content, variables)
  
  // Generate random tags (3-5 tags)
  const numTags = 3 + Math.floor(Math.random() * 3)
  const selectedTags = [...TAGS]
    .sort(() => Math.random() - 0.5)
    .slice(0, numTags)

  return {
    id: `article-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title,
    excerpt: content.substring(0, 150) + '...',
    content,
    category,
    author: 'AI Reporter',
    date: format(new Date(), 'yyyy-MM-dd'),
    readTime: `${3 + Math.floor(Math.random() * 5)} min`,
    imageUrl: IMAGE_URLS[Math.floor(Math.random() * IMAGE_URLS.length)],
    tags: selectedTags,
    views: 1000 + Math.floor(Math.random() * 10000)
  }
}

// Main function
async function main() {
  console.log('🚀 Generating new AI article...')
  
  const article = generateArticle()
  console.log(`📝 Generated article: ${article.title}`)
  console.log(`📂 Category: ${article.category}`)
  console.log(`🏷️ Tags: ${article.tags.join(', ')}`)
  
  // Create articles directory if it doesn't exist
  const articlesDir = join(process.cwd(), 'app', 'articles')
  if (!existsSync(articlesDir)) {
    mkdirSync(articlesDir, { recursive: true })
  }
  
  // Save article as JSON
  const articlePath = join(articlesDir, `${article.id}.json`)
  writeFileSync(articlePath, JSON.stringify(article, null, 2))
  console.log(`💾 Article saved to: ${articlePath}`)
  
  // Update articles index
  const indexPath = join(articlesDir, 'index.json')
  let articlesIndex: ArticleData[] = []
  
  if (existsSync(indexPath)) {
    const existingData = readFileSync(indexPath, 'utf-8')
    articlesIndex = JSON.parse(existingData)
  }
  
  // Add new article at the beginning
  articlesIndex.unshift(article)
  
  // Keep only last 100 articles
  if (articlesIndex.length > 100) {
    articlesIndex = articlesIndex.slice(0, 100)
  }
  
  writeFileSync(indexPath, JSON.stringify(articlesIndex, null, 2))
  console.log(`📋 Updated articles index (${articlesIndex.length} articles total)`)
  
  // Generate sitemap entry (simplified)
  const sitemapEntry = `  <url>
    <loc>https://ai-news-daily.vercel.app/article/${article.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
  
  console.log('\n📍 Sitemap entry generated:')
  console.log(sitemapEntry)
  
  console.log('\n✅ Article generation complete!')
  console.log('📊 Next steps:')
  console.log('1. Commit and push the new article')
  console.log('2. Trigger Vercel deployment')
  console.log('3. Share on social media')
}

// Run the script
main().catch(console.error)