
# Neobrutalist Next.js Portfolio


This is a modern, customizable developer portfolio built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS. It features animated marquees, SVG icons, responsive layouts, and easy configuration for your own skills, projects, and profile.

**Design Inspiration:**
> This portfolio was inspired by the neobrutalism design movement. I used the [neobrutalism.dev component library](https://www.neobrutalism.dev/) to help achieve the unique look and feel.

---


## 🚀 Features

- Neobrutalist design, leveraging [neobrutalism.dev](https://www.neobrutalism.dev/) components
- Fully responsive, mobile-first design
- Animated skill marquee with SVG brand icons
- Easily customizable profile, skills, and projects
- Modern UI with [Clash Display](https://www.fontshare.com/fonts/clash-display) and [Sora](https://fonts.google.com/specimen/Sora) fonts
---

## 🛠 Prerequisites & Installation

1. **Clone the repository:**
	 ```bash
	 git clone https://github.com/rumanstheddy/portfolio-neobrutalist.git
	 cd portfolio-neobrutalist
	 ```
2. **Install dependencies:**
	 ```bash
	 npm install
	 # or
	 yarn install
	 # or
	 pnpm install
	 # or
	 bun install
	 ```

---

## 💻 Running the Development Server

Start the local dev server:

```bash
npm run dev
# or yarn dev, pnpm dev, bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

---

## 📦 Building & Deploying

### Build for Production

```bash
npm run build
npm start
```

### Deploy on Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket.
2. Go to [Vercel](https://vercel.com/import) and import your repo.
3. Follow the prompts (no extra config needed for most cases).

For more, see [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🗂 Project Structure & Key Files

```
src/
	app/                # Next.js app directory (routing, layout, pages)
		globals.css       # Global styles (Tailwind, custom CSS)
		layout.tsx        # Root layout
		page.tsx          # Main homepage
		theme-provider.tsx# Theme context/provider
	components/         # Reusable React components
		AboutSection.tsx
		Footer.tsx
		HeroSection.tsx
		IconButton.tsx
		Marquee.tsx
		Navbar.tsx
		ProjectsSection.tsx
		stars/            # SVG star components
	data/
		profile.ts        # Your profile data (bio, links, etc.)
	lib/
		constants.ts      # Shared constants (SVG paths, skills, etc.)
		utils.ts          # Utility functions
	svgs/               # Custom SVGs (brand icons, etc.)
public/
	fonts/              # Custom fonts (if any)
	svgs/               # Public SVG assets
```

---

## 🎨 Customization Options

- **Profile Data:**
	- Edit `src/data/profile.ts` to update your name, bio, social links, etc.
- **Skills & Marquee:**
	- Update `SKILLS_MARQUEE` in `src/lib/constants.ts` to add/remove skills and icons.
	- Add SVGs to `public/svgs/` for new skills (use official brand colors for best results).
- **Projects:**
	- Edit `src/components/ProjectsSection.tsx` and/or add a data file for your projects.
- **SVG Icons:**
	- Replace or add SVGs in `public/svgs/` and reference them in your constants/data.
- **Styling:**
	- Modify `src/app/globals.css` for global styles.
	- Use Tailwind utility classes in components for custom layouts.
- **Fonts:**
	- Uses [Geist](https://vercel.com/font) by default via `next/font`.
	- To change, update the font import in `src/app/layout.tsx`.

---

## 🧹 Linting, Formatting & Type Checking

- **Lint:**
	```bash
	npm run lint
	# or npx eslint .
	```
- **Type Check:**
	```bash
	npm run type-check
	# or npx tsc --noEmit
	```
- **Format:**
	(If using Prettier or other formatters, add instructions here)

---

## ⚙️ Environment Variables & Configuration

No environment variables are required for basic usage. If you add API integrations or analytics, document them here.

---

## 🤝 Contribution Guidelines

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📝 License

This project is open source. Add your license here (e.g., MIT, Apache-2.0, etc.).
