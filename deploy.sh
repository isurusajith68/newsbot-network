#!/bin/bash

# Deploy script for NewsBot Network

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🏗️ Building project..."
npm run build

echo ""
echo "✅ Build completed successfully!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Push to GitHub:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit: NewsBot Network'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/YOUR_USERNAME/newsbot-network.git"
echo "   git push -u origin main"
echo ""
echo "2. Deploy to Vercel:"
echo "   - Go to https://vercel.com/new"
echo "   - Import your GitHub repository"
echo "   - Add environment variables from .env.example"
echo "   - Deploy!"
echo ""
echo "3. Set up automation:"
echo "   - Add GitHub Secrets for Vercel tokens"
echo "   - The daily workflow will run automatically"
echo ""
echo "4. Apply for AdSense:"
echo "   - Wait for some content to be published"
echo "   - Apply at https://www.google.com/adsense"
echo ""
echo "💡 Tip: Run 'npm run generate-article' to create your first article!"
echo ""
echo "🎉 Your AI news website is ready to go!"