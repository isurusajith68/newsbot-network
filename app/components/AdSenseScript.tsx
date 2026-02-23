'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdSenseScript() {
  useEffect(() => {
    // Load AdSense script
    const script = document.createElement('script')
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)

    // Initialize ads
    const initAds = () => {
      if (window.adsbygoogle) {
        try {
          window.adsbygoogle.push({})
        } catch (e) {
          console.error('AdSense error:', e)
        }
      }
    }

    // Initialize after script loads
    script.onload = initAds

    // Cleanup
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}