import { notFound } from 'next/navigation'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { Calendar, User, Clock, Eye, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'

interface Article {
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

interface PageProps {
  params: Promise<{ id: string }>
}

async function getArticle(id: string): Promise<Article | null> {
  try {
    const articlePath = join(process.cwd(), 'app', 'articles', `${id}.json`)
    
    if (!existsSync(articlePath)) {
      // Check index for article
      const indexPath = join(process.cwd(), 'app', 'articles', 'index.json')
      if (existsSync(indexPath)) {
        const indexData = readFileSync(indexPath, 'utf-8')
        const articles: Article[] = JSON.parse(indexData)
        return articles.find(article => article.id === id) || null
      }
      return null
    }
    
    const articleData = readFileSync(articlePath, 'utf-8')
    return JSON.parse(articleData)
  } catch (error) {
    console.error('Error reading article:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const article = await getArticle(id)
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.'
    }
  }
  
  return {
    title: `${article.title} | AI News Daily`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
      images: [article.imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params
  const article = await getArticle(id)
  
  if (!article) {
    notFound()
  }
  
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center mb-4">
          <Link
            href={`/category/${article.category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
            className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full hover:bg-blue-200 transition"
          >
            {article.category}
          </Link>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-600">
              <User className="h-5 w-5 mr-2" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>{article.readTime} read</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Eye className="h-5 w-5 mr-2" />
              <span>{article.views.toLocaleString()} views</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full">
              <Bookmark className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded">
            AI-generated image
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none mb-12">
        <div className="article-content" dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
      </article>

      {/* In-Article Ad */}
      <div className="my-12">
        <div className="ad-container ad-unit">
          <p className="text-sm text-gray-500">Advertisement</p>
          <div className="text-gray-400">In-Article Ad (300x250)</div>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
            {article.author.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-bold">{article.author}</h3>
            <p className="text-gray-600">AI News Reporter</p>
          </div>
        </div>
        <p className="text-gray-700">
          This article was generated by artificial intelligence. {article.author} is an AI reporter that analyzes trends and generates news content daily. All articles are reviewed for quality and relevance before publication.
        </p>
      </div>

      {/* Related Articles (Placeholder) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="font-bold text-lg mb-2">More AI News Coming Soon</h4>
            <p className="text-gray-600">Check back tomorrow for new AI-generated articles on the latest technology trends.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="font-bold text-lg mb-2">Subscribe for Updates</h4>
            <p className="text-gray-600">Get daily AI news delivered to your inbox. Never miss an important development.</p>
          </div>
        </div>
      </div>

      {/* Comments Section (Placeholder) */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold mb-6">Comments</h3>
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Comments are disabled for AI-generated content.</p>
          <p className="text-sm text-gray-400">
            To provide feedback or report issues, please use the contact form.
          </p>
        </div>
      </div>
    </div>
  )
}

// Helper function to format content (simple markdown-like formatting)
function formatContent(content: string): string {
  return content
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('• ')) {
        return `<ul><li>${paragraph.substring(2)}</li></ul>`
      }
      if (paragraph.match(/^\d+\. /)) {
        return `<ol><li>${paragraph.substring(paragraph.indexOf(' ') + 1)}</li></ol>`
      }
      if (paragraph.includes(':')) {
        const [heading, ...rest] = paragraph.split(':')
        if (heading.length < 50 && rest.length > 0) {
          return `<h3>${heading}:</h3><p>${rest.join(':')}</p>`
        }
      }
      return `<p>${paragraph}</p>`
    })
    .join('')
    .replace(/<ul><li>(.*?)<\/li><\/ul>/g, (match: string, content: string) => {
      const items = content.split('\n• ').map((item: string) => `<li>${item}</li>`).join('')
      return `<ul>${items}</ul>`
    })
}