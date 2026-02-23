import { TrendingUp, Calendar, Tag, ExternalLink } from 'lucide-react'
import { generateSampleArticles } from '../data/sampleArticles'

export default function Sidebar() {
  const articles = generateSampleArticles()
  const trendingArticles = [...articles].sort((a, b) => b.views - a.views).slice(0, 5)

  const categories = [
    { name: 'AI & ML', count: 42, color: 'bg-purple-100 text-purple-800' },
    { name: 'Technology', count: 38, color: 'bg-blue-100 text-blue-800' },
    { name: 'Business', count: 29, color: 'bg-green-100 text-green-800' },
    { name: 'Hardware', count: 18, color: 'bg-orange-100 text-orange-800' },
    { name: 'Ethics', count: 15, color: 'bg-red-100 text-red-800' },
    { name: 'Finance', count: 12, color: 'bg-yellow-100 text-yellow-800' },
  ]

  const tags = [
    'OpenAI', 'GPT-5', 'Machine Learning', 'Startup', 'Funding',
    'Ethics', 'Healthcare', 'Chip', 'Content', 'Marketing',
    'Supply Chain', 'Finance', 'Research', 'Standards'
  ]

  return (
    <div className="space-y-8">
      {/* Trending Articles */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">Trending Now</h3>
        </div>
        <div className="space-y-4">
          {trendingArticles.map((article, index) => (
            <div key={article.id} className="border-b pb-4 last:border-0 last:pb-0">
              <div className="flex items-start">
                <span className="text-2xl font-bold text-gray-300 mr-3">{index + 1}</span>
                <div>
                  <h4 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Ad */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="ad-container ad-unit h-64">
          <p className="text-sm text-gray-500">Advertisement</p>
          <div className="text-gray-400">Sidebar Ad (300x600)</div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full ${category.color.split(' ')[0]} mr-3`}></span>
                <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                  {category.name}
                </span>
              </div>
              <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center mb-6">
          <Tag className="h-6 w-6 text-blue-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">Popular Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full cursor-pointer transition"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Stay Informed</h3>
        <p className="text-blue-100 mb-4">
          Get daily AI-generated news delivered directly to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-center"
          >
            Subscribe Now
            <ExternalLink className="h-4 w-4 ml-2" />
          </button>
        </form>
        <p className="text-xs text-blue-200 mt-3">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}