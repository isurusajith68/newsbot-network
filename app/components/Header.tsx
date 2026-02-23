import Link from 'next/link'
import { Newspaper, Search, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <Link href="/" className="text-2xl font-bold text-gray-900">
              NewsBot<span className="text-blue-600">Network</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/tech" className="text-gray-700 hover:text-blue-600 font-medium">
              Technology
            </Link>
            <Link href="/business" className="text-gray-700 hover:text-blue-600 font-medium">
              Business
            </Link>
            <Link href="/ai" className="text-gray-700 hover:text-blue-600 font-medium">
              AI & ML
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Search className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* AdSense Header Ad */}
        <div className="py-4">
          <div className="ad-container ad-unit">
            <p className="text-sm text-gray-500">Advertisement</p>
            <div className="text-gray-400">Header Ad Unit (728x90)</div>
            {/* Google AdSense code will go here */}
            {/* <ins className="adsbygoogle"
                 style={{display:'block'}}
                 data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
                 data-ad-slot="XXXXXXXXXX"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins> */}
          </div>
        </div>
      </div>
    </header>
  )
}