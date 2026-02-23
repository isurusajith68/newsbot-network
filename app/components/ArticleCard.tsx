import { Clock, Eye, User } from 'lucide-react'
import { Article } from '../data/sampleArticles'
import Link from 'next/link'

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.id}`}>
      <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${featured ? 'border-2 border-blue-100' : ''}`}>
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime} read</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Eye className="h-4 w-4 mr-1" />
              <span>{article.views.toLocaleString()} views</span>
            </div>
          </div>

          <h3 className={`font-bold mb-3 ${featured ? 'text-2xl' : 'text-xl'} text-gray-900 hover:text-blue-600`}>
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Date */}
          <div className="text-sm text-gray-500 border-t pt-3">
            Published on {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}