# 📤 Push NewsBot Network to GitHub

## Quick Methods:

### Method 1: Run the Push Script
```bash
cd newsbot-network
./push-to-github.sh
```

### Method 2: Manual Git Commands
```bash
cd newsbot-network

# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Complete NewsBot Network website"

# Push (choose one):

# Option A: SSH (if you have SSH key set up)
git remote set-url origin git@github.com:isurusajith68/newsbot-network.git
git push -u origin main

# Option B: Personal Access Token
# Create token at: https://github.com/settings/tokens (select 'repo' scope)
git remote set-url origin https://isurusajith68:YOUR_TOKEN@github.com/isurusajith68/newsbot-network.git
git push -u origin main
```

### Method 3: GitHub Web Upload (Easiest)
1. Go to https://github.com/isurusajith68/newsbot-network
2. Click "Add file" → "Upload files"
3. Select ALL files from the `newsbot-network` folder
4. Click "Commit changes"

### Method 4: GitHub Desktop
1. Download GitHub Desktop
2. Clone your repository
3. Copy all files from `newsbot-network` folder
4. Commit and push

## Files to Upload:
- All files in the `newsbot-network` folder
- **Important**: Include hidden files like `.github/`

## After Successful Push:

### 1. Deploy on Vercel
1. Go to https://vercel.com/new
2. Import `isurusajith68/newsbot-network`
3. Click "Deploy"

### 2. Set Up Automation
1. Go to GitHub repo → Settings → Secrets → Actions
2. Add Vercel tokens (get from vercel.com/account/tokens)

### 3. Test Your Site
Visit: `https://newsbot-network.vercel.app`

## Troubleshooting:

### If push fails with "Permission denied":
1. Generate new token: https://github.com/settings/tokens
2. Select scopes: `repo` (full control)
3. Use token in URL: `https://isurusajith68:NEW_TOKEN@github.com/isurusajith68/newsbot-network.git`

### If files are too large:
- Make sure to exclude `node_modules/`, `.git/`, and `.next/`
- Run: `git rm -r --cached node_modules` if accidentally added

### Need help?
- Check GitHub status: https://www.githubstatus.com/
- GitHub Docs: https://docs.github.com/en

## 🎉 Success Checklist:
- [ ] Code pushed to GitHub
- [ ] Repository visible at: https://github.com/isurusajith68/newsbot-network
- [ ] Vercel deployment started
- [ ] Site accessible at: https://newsbot-network.vercel.app
- [ ] GitHub Secrets configured
- [ ] First article auto-generated (tonight at 00:00 UTC)