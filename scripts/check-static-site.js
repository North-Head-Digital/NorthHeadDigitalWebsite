#!/usr/bin/env node

const fs = require("fs");

const siteUrl = "https://northheaddigital.com";
const pages = [
  { file: "public/index.html", url: `${siteUrl}/` },
  { file: "public/services.html", url: `${siteUrl}/services.html` },
  { file: "public/pricing.html", url: `${siteUrl}/pricing.html` },
  { file: "public/about.html", url: `${siteUrl}/about.html` },
  { file: "public/contact.html", url: `${siteUrl}/contact.html` },
];

const errors = [];

const read = (file) => {
  try {
    return fs.readFileSync(file, "utf8");
  } catch (error) {
    errors.push(`${file}: ${error.message}`);
    return "";
  }
};

for (const page of pages) {
  const html = read(page.file);
  if (!html) continue;

  const checks = [
    [/<title>[^<]+<\/title>/, "missing title"],
    [/<meta name="description" content="[^"]+" \/>/, "missing meta description"],
    [new RegExp(`<link rel="canonical" href="${page.url.replace(/\//g, "\\/")}" \\/>`), "missing canonical URL"],
    [new RegExp(`<meta property="og:url" content="${page.url.replace(/\//g, "\\/")}" \\/>`), "missing Open Graph URL"],
    [/<meta name="twitter:card" content="summary" \/>/, "missing Twitter card"],
    [/<a class="skip-link" href="#main">Skip to content<\/a>/, "missing skip link"],
    [/<main id="main">/, "missing main landmark id"],
  ];

  for (const [pattern, message] of checks) {
    if (!pattern.test(html)) errors.push(`${page.file}: ${message}`);
  }

  if (/\sstyle=/.test(html)) {
    errors.push(`${page.file}: inline style attribute found`);
  }
}

const sitemap = read("public/sitemap.xml");
for (const page of pages) {
  if (!sitemap.includes(`<loc>${page.url}</loc>`)) {
    errors.push(`public/sitemap.xml: missing ${page.url}`);
  }
}

const robots = read("public/robots.txt");
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  errors.push("public/robots.txt: missing sitemap directive");
}

const netlify = read("netlify.toml");
for (const expected of ["npm run build", 'publish = "public"']) {
  if (!netlify.includes(expected)) {
    errors.push(`netlify.toml: missing ${expected}`);
  }
}

if (errors.length) {
  console.error("Static site checks failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Static site checks passed.");
