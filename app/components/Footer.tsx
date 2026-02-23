import Link from 'next/link'
import { Newspaper, Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Newspaper className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">NewsBot<span className="text-blue-400">Network</span></span>
            </div>
            <p className="text-gray-400">
              Daily AI-generated news articles covering technology, business, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tech" className="text-gray-400 hover:text-white">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-gray-400 hover:text-white">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-gray-400 hover:text-white">
                  AI & ML
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white">
                  AI Content Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get daily AI-generated news delivered to your inbox.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Ad */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="ad-container ad-unit bg-gray-800">
            <p className="text-sm text-gray-400">Advertisement</p>
            <div className="text-gray-500">Footer Ad Unit (728x90)</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} NewsBot Network. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This website uses AI to generate news articles. Content is automatically created and may contain inaccuracies.
          </p>
        </div>
      </div>
    </footer>
  )
}