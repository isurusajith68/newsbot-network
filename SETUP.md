# 🚀 NewsBot Network - Setup Guide

## Overview
This is a fully automated AI-powered news website that generates and publishes articles daily. It's optimized for Google AdSense monetization and SEO.

## Quick Start

### 1. Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/newsbot-network)

### 2. Set Up GitHub Repository
```bash
# Clone the repository
git clone https://github.com/yourusername/newsbot-network
cd newsbot-network

# Install dependencies
npm install

# Run development server
npm run dev
```

## Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

### Required Setup Steps

#### 1. Google AdSense
1. Apply for Google AdSense at https://www.google.com/adsense
2. Once approved, get your `ca-pub-XXXXXXXXXXXXXXX` client ID
3. Create ad units for:
   - Header (728x90)
   - Sidebar (300x600)
   - In-Article (300x250)
   - Footer (728x90)
4. Add your AdSense client ID to `.env.local`

#### 2. Google Analytics
1. Create Google Analytics 4 property
2. Get your `G-XXXXXXXXXX` measurement ID
3. Add to `.env.local`

#### 3. GitHub Secrets (for automation)
Go to your repository → Settings → Secrets and variables → Actions

Add these secrets:
- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID
- `VERCEL_DEPLOY_HOOK`: Vercel deploy webhook URL (optional)
- `OPENAI_API_KEY`: For enhanced article generation (optional)
- `ANTHROPIC_API_KEY`: For Claude article generation (optional)

#### 4. Custom Domain (Optional)
1. Buy a domain from Namecheap, Google Domains, etc.
2. Add domain in Vercel project settings
3. Update `NEXT_PUBLIC_SITE_URL` in environment variables

## Daily Automation

### GitHub Actions Workflow
The `.github/workflows/daily-article.yml` file automatically:
1. Generates a new article daily at 00:00 UTC
2. Commits and pushes the article
3. Triggers Vercel deployment
4. (Optional) Posts to social media

### Manual Article Generation
```bash
# Generate a new article manually
npm run generate-article

# This creates:
# - app/articles/{article-id}.json
# - Updates app/articles/index.json
# - Prints sitemap entry
```

## AdSense Integration

### Ad Placement
The template includes optimized ad placements:
1. **Header**: Above navigation (728x90)
2. **Sidebar**: Right sidebar (300x600)
3. **In-Article**: Between article sections (300x250)
4. **Footer**: Bottom of page (728x90)

### AdSense Code
AdSense scripts are automatically loaded via `app/components/AdSenseScript.tsx`. Update the component with your actual ad units.

## SEO Optimization

### Built-in Features
- ✅ Meta tags (Open Graph, Twitter Cards)
- ✅ JSON-LD structured data
- ✅ Sitemap generation (via script)
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Mobile responsive design
- ✅ Fast page loads (Next.js optimization)

### Customization
Update `app/layout.tsx` with:
- Your site's metadata
- Google verification code (after AdSense approval)
- Custom analytics scripts

## Content Management

### Article Structure
Articles are stored as JSON files in `app/articles/`:
```json
{
  "id": "article-123",
  "title": "Article Title",
  "excerpt": "Short description...",
  "content": "Full article content...",
  "category": "AI & ML",
  "author": "AI Reporter",
  "date": "2024-03-15",
  "readTime": "5 min",
  "imageUrl": "https://...",
  "tags": ["AI", "Technology"],
  "views": 12345
}
```

### Adding Custom Articles
1. Create `app/articles/{id}.json`
2. Add to `app/articles/index.json`
3. The article will appear automatically

## Monetization Strategy

### Revenue Streams
1. **Google AdSense**: Primary revenue from display ads
2. **Affiliate Marketing**: Add affiliate links in articles
3. **Sponsored Content**: Charge for featured articles
4. **Newsletter**: Build email list for future monetization

### Traffic Goals for AdSense
- Minimum: 10,000 monthly pageviews
- Target: 50,000+ monthly pageviews
- RPM: $5-$20 (depends on niche and traffic quality)

### Tips for AdSense Approval
1. **Quality Content**: Ensure articles are unique and valuable
2. **Regular Updates**: Daily posts help with approval
3. **Professional Design**: Clean, user-friendly layout
4. **Legal Pages**: Privacy Policy, Terms, Disclaimer
5. **Contact Information**: Visible contact page

## Advanced Features

### Enhanced AI Generation
To use OpenAI or Claude for better articles:

1. Add API keys to GitHub Secrets
2. Modify `scripts/generate-article.ts` to use AI APIs
3. The script will generate higher-quality content

### Social Media Integration
1. Add Twitter/Facebook API keys
2. Enable social posting in GitHub Actions
3. Articles auto-post to social media

### Email Newsletter
1. Integrate with Mailchimp/ConvertKit
2. Add subscription form to sidebar
3. Send weekly digests of top articles

## Maintenance

### Regular Tasks
1. **Daily**: Check GitHub Actions logs
2. **Weekly**: Review AdSense performance
3. **Monthly**: Update dependencies (`npm update`)
4. **Quarterly**: Audit SEO performance

### Monitoring
- **Uptime**: Vercel provides built-in monitoring
- **Traffic**: Google Analytics dashboard
- **Revenue**: AdSense performance reports
- **SEO**: Google Search Console

## Troubleshooting

### Common Issues

1. **Articles not generating**
   - Check GitHub Actions permissions
   - Verify repository secrets are set
   - Check workflow file syntax

2. **AdSense not showing ads**
   - Verify AdSense account is approved
   - Check ad unit IDs are correct
   - Ensure site is publicly accessible

3. **SEO issues**
   - Verify meta tags are correct
   - Check robots.txt is accessible
   - Submit sitemap to Google Search Console

4. **Build errors**
   - Check Node.js version (requires 18+)
   - Verify all dependencies are installed
   - Check TypeScript compilation errors

## Support

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google AdSense Help](https://support.google.com/adsense)
- [Vercel Documentation](https://vercel.com/docs)

### Getting Help
1. Check the [GitHub Issues](https://github.com/yourusername/ai-news-website/issues)
2. Search for similar problems
3. Create a new issue with details

## License
MIT License - See LICENSE file for details.

---

**🎯 Next Steps:**
1. Deploy to Vercel
2. Configure environment variables
3. Set up GitHub Secrets
4. Apply for Google AdSense
5. Enable daily automation
6. Start promoting your site!

**💰 Remember:** It takes time to build traffic and earn revenue. Focus on quality content and SEO, and the money will follow.