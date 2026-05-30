# NorthHead Digital — Website

The marketing website for **NorthHead Digital**, a web design and AI consulting studio
for Pacific Northwest coastal small businesses.

> Modern digital tools for local business.

## Tech

Plain, production-ready **HTML, CSS, and JavaScript** generated with
**Eleventy** for shared layouts and reusable page structure. Fully responsive
across mobile, tablet, and desktop.

## Structure

| File                                | Page                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| `src/index.njk`                     | Home — hero, who we serve, services overview, pillars, pricing teaser, process |
| `src/services.njk`                  | Services — Web Design, Local SEO, Practical AI, Automation                     |
| `src/pricing.njk`                   | Pricing — 3 tiers, monthly care, add-ons, payment options                      |
| `src/about.njk`                     | About — story, positioning, values                                             |
| `src/contact.njk`                   | Free Digital & AI Readiness Audit request form                                 |
| `src/_includes/layouts/base.njk`    | Shared HTML document shell                                                     |
| `src/_includes/partials/header.njk` | Shared site header/navigation                                                  |
| `src/_includes/partials/footer.njk` | Shared site footer                                                             |
| `src/css/styles.css`                | Design system (brand tokens, layout, components, responsive)                   |
| `src/js/main.js`                    | Mobile nav, sticky header, scroll reveal, form handling                        |
| `src/assets/favicon.svg`            | Compass/headland brand mark                                                    |
| `netlify.toml`                      | Netlify deploy + headers config                                                |

The site content is drawn from the strategy documents in [`docs/`](docs/):
brand identity & positioning, the local pricing model, and the readiness audit template.

## Run locally

Install dependencies, build, and serve the generated `public/` folder:

```bash
npm install
npm run build
python3 -m http.server 8000 -d public
# then visit http://localhost:8000
```

## Check

Run the static checks before publishing:

```bash
npm run check
```

Format supported source files:

```bash
npm run format
```

## Deploy

Deploys to **Netlify** with the Eleventy build command in `netlify.toml`, which
generates `public/` and publishes that directory. The contact form is
wired for [Netlify Forms](https://docs.netlify.com/forms/setup/) via the `data-netlify`
attribute and a hidden `form-name` field.

## Before launch

- Replace the placeholder email `hello@northheaddigital.com` and add a real phone number.
- Add real photography (local storefronts, coastal scenes) per the brand imagery guide.
- Connect the contact form to your inbox/CRM (Netlify Forms notifications or a webhook).
