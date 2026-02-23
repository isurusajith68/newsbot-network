#!/bin/bash

# Script to push NewsBot Network to GitHub

echo "🚀 Pushing NewsBot Network to GitHub..."

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in newsbot-network directory"
    echo "Please run: cd newsbot-network"
    exit 1
fi

# Check git status
echo "📊 Checking git status..."
git status

# Add all files
echo "📦 Adding files..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Update: Complete NewsBot Network with daily automation"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
echo ""
echo "Choose authentication method:"
echo "1. SSH Key (recommended)"
echo "2. Personal Access Token"
echo "3. GitHub CLI"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        # SSH method
        git remote set-url origin git@github.com:isurusajith68/newsbot-network.git
        git push -u origin main
        ;;
    2)
        # Token method
        read -p "Enter your GitHub Personal Access Token: " token
        git remote set-url origin https://isurusajith68:$token@github.com/isurusajith68/newsbot-network.git
        git push -u origin main
        ;;
    3)
        # GitHub CLI
        gh auth login
        git push origin main
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "📁 Repository: https://github.com/isurusajith68/newsbot-network"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Deploy on Vercel: https://vercel.com/new"
    echo "2. Add GitHub Secrets for automation"
    echo "3. Test your site: https://newsbot-network.vercel.app"
else
    echo ""
    echo "❌ Push failed. Try manual methods:"
    echo "   - Web upload: Drag files to GitHub"
    echo "   - GitHub Desktop app"
    echo "   - Generate new token with 'repo' scope"
fi