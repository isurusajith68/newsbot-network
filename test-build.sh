#!/bin/bash

echo "🔧 Testing NewsBot Network build..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install --silent

# Check TypeScript
echo "📝 Checking TypeScript..."
npx tsc --noEmit

# Try to build
echo "🏗️ Attempting build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Ready for Vercel deployment!"
else
    echo "❌ Build failed. Check errors above."
fi