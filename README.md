# Nikos Oikonomou - Personal Portfolio

A modern, responsive personal portfolio website built with Gatsby, showcasing professional experience, technical articles, and personal interests.

## 🚀 Features

- **Professional Profile**: Experience timeline, education, and personal details
- **Technical Blog**: Curated articles from Medium with search and filtering
- **Modern Design**: Clean, responsive UI with dark/light theme support
- **Performance Optimized**: Gatsby's static generation with image optimization

## 🛠️ Tech Stack

- **Framework**: Gatsby 5 + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Content**: JSON data + RSS feed integration
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/nikooiko/nikooiko.github.io.git
cd nikooiko.github.io

# Install dependencies
npm install

# Start development server
npm run develop
```

## 🔧 Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache
- `npm run typecheck` - Run TypeScript type checking
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run fetch:articles` - Update articles from Medium RSS feed

## 📝 Content Management

### Articles

Articles are automatically fetched from Medium RSS feed using the `fetch:articles` script. The script:

- Fetches articles from `https://medium.com/feed/@nikooiko`
- Extracts images and descriptions
- Saves to `src/data/articles.json`

### World Map (Traveling card)

The interactive world map in the Traveling hobby card uses `react-simple-maps` to render an SVG map from topojson data. The map data file (`static/countries-110m.json`) comes from the `world-atlas` npm package but is committed directly to `static/` — `world-atlas` itself is not a runtime dependency and should not be added back.

To update the map data:
```bash
npx world-atlas # or download manually from https://github.com/topojson/world-atlas
cp node_modules/world-atlas/countries-110m.json static/countries-110m.json
```

### Personal Information

Update personal details, experience, and education in the respective component files:

- `src/components/about/PersonalDetailsSection.tsx`
- `src/components/about/ExperienceSection.tsx`
- `src/components/about/EducationSection.tsx`

## 🎨 Customization

### Theme

The site uses a custom theme system with CSS variables. Modify colors in `src/styles/global.css`.

### Styling

Tailwind CSS is used for styling. Configuration is in `tailwind.config.js`.

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when pushing to the main branch. The `postbuild` script copies additional files (like CNAME) to the public directory.

## 📄 License

This project is private and personal.
