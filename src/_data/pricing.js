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

// Expose both the ordered list (for looping) and named keys (for
// referencing a specific tier inline, e.g. pricing.growth.from).
const byKey = Object.fromEntries(tiers.map((t) => [t.key, t]));

module.exports = { tiers, ...byKey };
