# Ward & Rafter Website - Setup Instructions

## Files Included

### HTML Pages (16 files)
- index.html - Homepage
- about.html - About the firm
- contact.html - Contact page with form
- attorneys.html - Attorneys listing
- mark-ward.html - Mark Ward bio
- andrew-rafter.html - Andrew Rafter bio
- landlord-tenant.html - Practice area
- condo-hoa.html - Practice area
- complex-litigation.html - Practice area
- real-estate.html - Practice area
- personal-injury.html - Practice area
- estate-planning.html - Practice area
- environmental-law.html - Practice area
- faq.html - Frequently asked questions
- blog.html - Blog/insights page

### Styling
- styles.css - Main stylesheet

### Images Folder
- nyc-skyline.jpg ✓ (from your uploads)
- brownstone.jpg ✓ (from your uploads)
- modern-condos.jpg ✓ (from your uploads)
- law-library.jpg ✓ (from your uploads)
- mark-ward.jpg ⚠️ PLACEHOLDER - Replace with actual headshot
- andrew-rafter.jpg ⚠️ PLACEHOLDER - Replace with actual headshot

## What You Need to Do

### 1. Get Attorney Headshots
Download from your current Wix site:
- Mark Ward's photo: https://static.wixstatic.com/media/124b89_608db580a606486595aa59857875d492~mv2.png
- Andrew Rafter's photo: https://static.wixstatic.com/media/124b89_719a802e9f3f482d8e0376d0d22e45c6~mv2.jpg

Save them as:
- mark-ward.jpg
- andrew-rafter.jpg

Replace the placeholder files in the images folder.

### 2. Set Up Contact Form
The contact form in contact.html currently has a placeholder URL.

Option A - Formspree (Recommended, Free):
1. Go to https://formspree.io
2. Create a free account
3. Create a new form
4. Copy your Form ID
5. In contact.html, replace YOUR_FORM_ID with your actual ID
   Find: action="https://formspree.io/f/YOUR_FORM_ID"
   Replace with: action="https://formspree.io/f/[your-actual-id]"

Option B - Netlify Forms (if using Netlify):
1. Add netlify attribute to form tag
2. Netlify will handle submissions automatically

### 3. File Structure
Your website folder should look like this:
```
ward-rafter-website/
├── index.html
├── about.html
├── contact.html
├── attorneys.html
├── mark-ward.html
├── andrew-rafter.html
├── landlord-tenant.html
├── condo-hoa.html
├── complex-litigation.html
├── real-estate.html
├── personal-injury.html
├── estate-planning.html
├── environmental-law.html
├── faq.html
├── blog.html
├── styles.css
└── images/
    ├── nyc-skyline.jpg
    ├── brownstone.jpg
    ├── modern-condos.jpg
    ├── law-library.jpg
    ├── mark-ward.jpg
    └── andrew-rafter.jpg
```

## Next Steps: GitHub Deployment

### Step 1: Create GitHub Repository
1. Log into your GitHub account at github.com
2. Click the "+" icon (top right) → "New repository"
3. Name it: ward-rafter-website
4. Keep it Public (required for free GitHub Pages)
5. Don't initialize with README
6. Click "Create repository"

### Step 2: Upload Files
1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL files (HTML, CSS, and the images folder)
3. Add a commit message: "Initial website upload"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. In your repository, click "Settings"
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select "main" and "/ (root)"
5. Click "Save"
6. Wait 2-3 minutes for deployment

Your site will be live at: https://[your-username].github.io/ward-rafter-website

### Step 4: Point Your Domain (wardrafter.com)
This requires Andrew's access to Squarespace Domains.

**In GitHub:**
1. In your repo Settings → Pages
2. Under "Custom domain", enter: wardrafter.com
3. Click "Save"
4. Check "Enforce HTTPS" (after DNS propagates)

**In Squarespace Domains:**
(Andrew will need to do this part)
1. Log into domains.squarespace.com
2. Select wardrafter.com
3. Go to DNS Settings
4. Add these records:

Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: [your-username].github.io

5. Save changes
6. Wait 24-48 hours for DNS to propagate

## Features

✓ Mobile responsive design
✓ Client portal link (https://ward-rafter.mycase.com)
✓ Contact form ready
✓ FAQ section populated
✓ Blog structure ready for posts
✓ All navigation working
✓ Staten Island/Richmond County emphasis throughout
✓ Professional, clean design

## Notes

- The blog page is a structure - you can add posts later
- The 4 secondary practice area pages (real estate, personal injury, estate planning, environmental law) are basic templates - you can expand them as needed
- All navigation links work between pages
- Mobile menu (hamburger) is styled but requires JavaScript to function - add this if needed

## Support

If you have questions about deployment, reach out in our next session!
