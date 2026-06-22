# Stang's Hot Dogs & Sausages — Website Preview

A premium, fully functional website redesign preview for **Stang's Hot Dogs and Sausages** in Corte Madera, California.

**Live URL:** [https://stangs-hot-dogs.vercel.app](https://stangs-hot-dogs.vercel.app)

**GitHub Repo:** [https://github.com/casmoneybaby/stangs-website-v1](https://github.com/casmoneybaby/stangs-website-v1)

---

## What We Built

A modern, mobile-first, conversion-focused website designed to help Stang's get more customers, increase lunch traffic, improve credibility, and make the food feel craveable. Features include:

- Bold, premium hero section with animated steam effects
- Interactive "Build Your Dog" ingredient selector with live preview
- Menu highlights with owner-confirmation notices
- "Why Stang's" value proposition cards
- Location section with embedded map and contact info
- FAQ accordion
- Paraphrased public review themes (no fake quotes)
- Photo gallery placeholders ready for owner images
- Catering/contact inquiry form
- Sticky mobile CTA bar (Call, Directions, Menu)
- SEO metadata, Open Graph, and LocalBusiness schema markup
- Smooth scroll-triggered animations via Framer Motion

---

## How to Run

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
```

---

## Tech Stack

- **Next.js** 16 (App Router, static export)
- **React** 19
- **Tailwind CSS** 4
- **Framer Motion** (scroll animations, interactions)
- **Lucide React** (icons)
- **TypeScript**

---

## Verified Facts Used

| Fact | Source |
|------|--------|
| Business name: Stang's Hot Dogs and Sausages | Public directories |
| Address: 1618 Redwood Hwy, Corte Madera, CA 94925 | Public directories |
| Phone: 415-250-5613 | Public directories |
| Location context: The Village at Corte Madera | Public directories |
| Business type: Hot dog / sausage shop | Public directories |
| Historical operation dating to at least 2013 | Salon article, public mentions |

---

## Owner Confirmation Needed

Before publishing as the official live site, the owner should confirm:

- [ ] Exact current menu items and descriptions
- [ ] Exact current prices
- [ ] Exact current hours of operation
- [ ] Official food photography
- [ ] Online ordering link (if any)
- [ ] Catering availability
- [ ] Social media links (Facebook, Instagram, etc.)
- [ ] Review usage permissions
- [ ] Vegetarian/vegan option details
- [ ] Beer and drink menu details
- [ ] Local vendor partnerships (Prather Ranch, Aidell's, etc.)
- [ ] **Current operational status** — public research shows no recent online activity

> **Important:** Public research found no evidence of recent activity for Stang's. Some directory listings show legacy data from 2013. Please verify with the owner that the business is currently open before using this website as a live sales tool.

---

## What to Show the Client

> "We built a modern, mobile-first website preview for Stang's that makes the food look more premium, helps customers call and get directions faster, highlights menu favorites, and gives the business a stronger online presence. The interactive 'Build Your Dog' feature engages visitors, and every section is designed to drive foot traffic to The Village at Corte Madera."

---

## Next Upgrade Ideas

- [ ] Add real menu with photos and prices
- [ ] Integrate online ordering (Square, Toast, etc.)
- [ ] Pull in live Google reviews
- [ ] Add full photo gallery
- [ ] Connect contact form to email service (Resend, SendGrid, etc.)
- [ ] Add Google Analytics
- [ ] Add QR code menu for tableside ordering
- [ ] Add loyalty program
- [ ] Add SMS lunch specials
- [ ] Add seasonal specials section
- [ ] Add owner dashboard for menu updates

---

## Folder Structure

```
stangs-hot-dogs/
├── app/
│   ├── components/       # Reusable components (Navbar, StickyMobileCTA)
│   ├── sections/         # Page sections (Hero, Menu, BuildYourDog, etc.)
│   ├── data/             # Business data, menu, FAQs, reviews
│   ├── lib/              # Utility functions
│   ├── globals.css       # Global styles & Tailwind theme
│   ├── layout.tsx        # Root layout with SEO
│   └── page.tsx          # Main page
├── public/               # Static assets
├── next.config.ts        # Next.js config
├── package.json
└── README.md
```

---

## License

Preview website built for client demonstration purposes.
