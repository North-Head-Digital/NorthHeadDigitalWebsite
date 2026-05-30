# NorthHead Digital — Website

The marketing website for **NorthHead Digital**, a web design and AI consulting studio
for Pacific Northwest coastal small businesses.

> Modern digital tools for local business.

## Tech

Plain, production-ready **HTML, CSS, and JavaScript** — no build step or framework.
Fully responsive across mobile, tablet, and desktop.

## Structure

| File | Page |
|------|------|
| `index.html` | Home — hero, who we serve, services overview, pillars, pricing teaser, process |
| `services.html` | Services — Web Design, Local SEO, Practical AI, Automation |
| `pricing.html` | Pricing — 3 tiers, monthly care, add-ons, payment options |
| `about.html` | About — story, positioning, values |
| `contact.html` | Free Digital & AI Readiness Audit request form |
| `css/styles.css` | Design system (brand tokens, layout, components, responsive) |
| `js/main.js` | Mobile nav, sticky header, scroll reveal, form handling |
| `assets/favicon.svg` | Compass/headland brand mark |
| `netlify.toml` | Netlify deploy + headers config |

The site content is drawn from the strategy documents in [`docs/`](docs/):
brand identity & positioning, the local pricing model, and the readiness audit template.

## Run locally

It's a static site — open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Deploys to **Netlify** with the build command in `netlify.toml`, which copies the
static site files into `public/` and publishes that directory. The contact form is
wired for [Netlify Forms](https://docs.netlify.com/forms/setup/) via the `data-netlify`
attribute and a hidden `form-name` field.

## Before launch

- Replace the placeholder email `hello@northheaddigital.com` and add a real phone number.
- Add real photography (local storefronts, coastal scenes) per the brand imagery guide.
- Connect the contact form to your inbox/CRM (Netlify Forms notifications or a webhook).
