export interface Article {
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

export function generateSampleArticles(): Article[] {
  return [
    {
      id: '1',
      title: 'OpenAI Unveils GPT-5: The Next Generation of AI Language Models',
      excerpt: 'OpenAI has announced GPT-5, featuring significant improvements in reasoning, accuracy, and multimodal capabilities.',
      content: 'OpenAI has officially announced GPT-5, the next iteration of its groundbreaking language model series. According to the company, GPT-5 demonstrates substantial improvements in reasoning capabilities, factual accuracy, and multimodal understanding. The new model reportedly handles complex tasks with greater precision and exhibits more nuanced understanding of context and intent...',
      category: 'AI & ML',
      author: 'AI Reporter',
      date: '2024-03-15',
      readTime: '5 min',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800',
      tags: ['OpenAI', 'GPT-5', 'Artificial Intelligence'],
      views: 12450
    },
    {
      id: '2',
      title: 'Tech Giants Announce Partnership for Open AI Standards',
      excerpt: 'Major technology companies collaborate to establish open standards for AI development and deployment.',
      content: 'In a landmark move, leading technology companies including Google, Microsoft, and Meta have announced a partnership to establish open standards for artificial intelligence development. The initiative aims to create common frameworks for AI safety, interoperability, and ethical guidelines. This collaboration comes amid growing concerns about fragmented AI ecosystems and the need for industry-wide standards...',
      category: 'Technology',
      author: 'Tech Analyst',
      date: '2024-03-14',
      readTime: '4 min',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800',
      tags: ['Standards', 'Partnership', 'Ethics'],
      views: 8920
    },
    {
      id: '3',
      title: 'AI Startup Raises $500M for Healthcare Diagnostics Platform',
      excerpt: 'MediAI secures massive funding round to expand its AI-powered diagnostic tools for healthcare providers.',
      content: 'Healthcare AI startup MediAI has raised $500 million in Series C funding led by prominent venture capital firms. The company plans to use the funds to expand its AI-powered diagnostic platform, which helps healthcare providers detect diseases earlier and more accurately. The platform currently analyzes medical images, patient records, and genetic data to provide comprehensive diagnostic insights...',
      category: 'Business',
      author: 'Business Reporter',
      date: '2024-03-13',
      readTime: '6 min',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800',
      tags: ['Healthcare', 'Startup', 'Funding'],
      views: 7560
    },
    {
      id: '4',
      title: 'New AI Chip Breaks Performance Records',
      excerpt: 'Innovative AI processor achieves unprecedented speed and efficiency for machine learning workloads.',
      content: 'A new AI chip developed by semiconductor startup NeuroTech has set performance records for machine learning inference tasks. The chip, named Athena, reportedly processes AI models 10 times faster than current market leaders while consuming 60% less power. This breakthrough could significantly reduce the cost and energy requirements of running large AI models...',
      category: 'Hardware',
      author: 'Hardware Expert',
      date: '2024-03-12',
      readTime: '3 min',
      imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      tags: ['Hardware', 'Chip', 'Performance'],
      views: 11230
    },
    {
      id: '5',
      title: 'AI-Powered Content Creation Tools See Explosive Growth',
      excerpt: 'Demand for AI content generation tools has increased by 300% in the past year, according to market research.',
      content: 'The market for AI-powered content creation tools has experienced explosive growth, with demand increasing by 300% over the past year. Businesses across industries are adopting these tools for marketing, customer service, and internal communications. The trend reflects the growing acceptance of AI-generated content and its potential to enhance productivity...',
      category: 'Marketing',
      author: 'Market Analyst',
      date: '2024-03-11',
      readTime: '4 min',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
      tags: ['Content', 'Marketing', 'Growth'],
      views: 6450
    },
    {
      id: '6',
      title: 'Ethical AI Framework Released by International Consortium',
      excerpt: 'Global AI ethics consortium publishes comprehensive framework for responsible AI development.',
      content: 'An international consortium of AI researchers, ethicists, and policymakers has released a comprehensive framework for ethical AI development. The framework addresses issues of bias, transparency, accountability, and societal impact. It provides guidelines for developers, companies, and regulators to ensure AI systems are developed and deployed responsibly...',
      category: 'Ethics',
      author: 'Ethics Reporter',
      date: '2024-03-10',
      readTime: '7 min',
      imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800',
      tags: ['Ethics', 'Framework', 'Responsible AI'],
      views: 5340
    },
    {
      id: '7',
      title: 'AI Revolutionizes Supply Chain Management',
      excerpt: 'Companies report 40% efficiency gains after implementing AI-powered supply chain solutions.',
      content: 'Artificial intelligence is transforming supply chain management, with early adopters reporting efficiency gains of up to 40%. AI algorithms optimize inventory management, predict demand fluctuations, and identify potential disruptions before they occur. The technology is particularly valuable in today\'s complex global supply chains, where even small improvements can lead to significant cost savings...',
      category: 'Logistics',
      author: 'Logistics Expert',
      date: '2024-03-09',
      readTime: '5 min',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800',
      tags: ['Supply Chain', 'Efficiency', 'Logistics'],
      views: 4890
    },
    {
      id: '8',
      title: 'New Study: AI Can Predict Market Trends with 85% Accuracy',
      excerpt: 'Research shows AI models can predict financial market movements with unprecedented accuracy.',
      content: 'A groundbreaking study from Stanford University demonstrates that AI models can predict financial market trends with 85% accuracy. The research analyzed decades of market data and identified patterns invisible to human analysts. While the technology shows promise, experts caution about the risks of over-reliance on AI predictions in volatile markets...',
      category: 'Finance',
      author: 'Finance Analyst',
      date: '2024-03-08',
      readTime: '6 min',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800',
      tags: ['Finance', 'Prediction', 'Research'],
      views: 9230
    }
  ]
}