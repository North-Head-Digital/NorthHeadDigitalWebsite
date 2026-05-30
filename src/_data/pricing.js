// Single source of truth for pricing tiers.
// Consumed by the pricing page, the homepage teaser, and the JSON-LD
// schema partial so the numbers can never drift out of sync.
const tiers = [
  {
    key: "essentials",
    name: "Digital Essentials",
    subtitle: "Website + Google cleanup for local businesses",
    from: "$750",
    typical: "$995",
    upTo: "$1,500",
    careFrom: "$75",
    careTo: "$175",
    min: "750",
    max: "1500",
  },
  {
    key: "growth",
    name: "Growth & Automation",
    subtitle: "More leads, fewer missed calls, better follow-up",
    from: "$2,500",
    typical: "$3,500",
    upTo: "$5,000",
    careFrom: "$250",
    careTo: "$650",
    min: "2500",
    max: "5000",
  },
  {
    key: "launchpad",
    name: "Startup Launchpad",
    subtitle: "Full digital launch for new or growing businesses",
    from: "$5,000",
    typical: "$7,500",
    upTo: "$10,000+",
    careFrom: "$500",
    careTo: "$1,250",
    min: "5000",
    max: null,
  },
];

// Optional monthly care plans.
const carePlans = [
  {
    name: "Essentials care",
    icon: "ic-care-light",
    price: "$75–$175",
    features: [
      "Updates & security checks",
      "Monthly Google post",
      "Small edits & review help",
      "Basic traffic report",
    ],
  },
  {
    name: "Growth care",
    icon: "ic-care-steady",
    price: "$250–$650",
    features: [
      "Up to 5 hours/month",
      "AI FAQ & workflow updates",
      "Monthly strategy call",
      "Performance reporting",
    ],
  },
  {
    name: "Launch & partner care",
    icon: "ic-care-full",
    price: "$500–$1,250+",
    features: [
      "Up to 10 hours/month",
      "Campaign & SEO expansion",
      "Automation improvements",
      "Ongoing growth roadmap",
    ],
  },
];

// À la carte add-ons (table).
const addOns = [
  { icon: "ic-page", name: "Extra website page", price: "$150–$300" },
  { icon: "ic-menu", name: "Menu setup", price: "$250–$500" },
  { icon: "ic-booking", name: "Booking integration", price: "$300–$750" },
  { icon: "ic-gallery", name: "Event landing page", price: "$300–$600" },
  { icon: "ic-reviews", name: "Review automation", price: "$250–$750" },
  { icon: "ic-chatbot", name: "AI chatbot", price: "$750–$1,500" },
  { icon: "ic-contact", name: "Email/SMS setup", price: "$500–$1,250" },
  { icon: "ic-shop", name: "E-commerce starter shop", price: "$1,500–$4,000" },
  { icon: "ic-quote", name: "Contractor quote intake", price: "$500–$1,500" },
];

// Expose both the ordered list (for looping) and named keys (for
// referencing a specific tier inline, e.g. pricing.growth.from).
const byKey = Object.fromEntries(tiers.map((t) => [t.key, t]));

module.exports = { tiers, carePlans, addOns, ...byKey };
