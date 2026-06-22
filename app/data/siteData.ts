// ============================================
// STANG'S HOT DOGS & SAUSAGES — SITE DATA
// ============================================
// NOTE: Some data below is based on public research and
// historical mentions. Items marked "needsConfirmation"
// should be verified with the business owner before publishing.

export const businessInfo = {
  name: "Stang's Hot Dogs and Sausages",
  shortName: "Stang's",
  tagline: "Gourmet Dogs. Serious Sausage Snap. Built Fresh in Corte Madera.",
  description:
    "Stang's serves bold hot dogs, sausages, toppings, drinks, and quick lunch energy right at The Village at Corte Madera.",
  address: {
    street: "1618 Redwood Hwy",
    city: "Corte Madera",
    state: "CA",
    zip: "94925",
    full: "1618 Redwood Hwy, Corte Madera, CA 94925",
  },
  phone: "415-250-5613",
  phoneLink: "tel:+14152505613",
  locationContext: "The Village at Corte Madera",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Stang's+Hot+Dogs+and+Sausages+Corte+Madera+CA",
  // Hours are unverified — confirm with owner
  hours: [
    { day: "Monday", time: "Confirm with owner" },
    { day: "Tuesday", time: "Confirm with owner" },
    { day: "Wednesday", time: "Confirm with owner" },
    { day: "Thursday", time: "Confirm with owner" },
    { day: "Friday", time: "Confirm with owner" },
    { day: "Saturday", time: "Confirm with owner" },
    { day: "Sunday", time: "Confirm with owner" },
  ],
};

export const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Build Your Dog", href: "#build" },
  { label: "Why Stang's", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
  { label: "FAQ", href: "#faq" },
];

export const heroData = {
  headline: "Gourmet Dogs. Serious Sausage Snap. Built Fresh in Corte Madera.",
  subheadline:
    "Stang's serves bold hot dogs, sausages, toppings, drinks, and quick lunch energy right at The Village at Corte Madera.",
  ctas: [
    { label: "Get Directions", href: businessInfo.mapsUrl, external: true },
    { label: "Call Stang's", href: businessInfo.phoneLink, external: true },
    { label: "Explore Menu", href: "#menu", external: false },
  ],
};

export const whyCards = [
  {
    title: "Big Flavor, Quick Service",
    description:
      "A quick bite that tastes like you planned your whole day around it. Grab lunch without the wait.",
    icon: "Zap",
  },
  {
    title: "Outdoor Seating",
    description:
      "Soak up the Corte Madera sun while you eat. Relaxed patio vibes with your dog.",
    icon: "Sun",
  },
  {
    title: "Gourmet Sausage Options",
    description:
      "From snappy all-beef dogs to bold sausage varieties — every option hits different.",
    icon: "Flame",
  },
  {
    title: "Vegetarian-Friendly",
    description:
      "Beyond sausage and veggie-friendly toppings mean everyone gets a dog they love.",
    icon: "Leaf",
  },
  {
    title: "Great Lunch Stop",
    description:
      "Right at The Village — perfect for a midday break while shopping or running errands.",
    icon: "ShoppingBag",
  },
  {
    title: "Local Corte Madera Favorite",
    description:
      "A known spot in Marin County for anyone craving a serious hot dog or sausage.",
    icon: "MapPin",
  },
];

// Menu items based on public mentions and common offerings.
// Marked for owner confirmation where applicable.
export const menuCategories = [
  {
    name: "Signature Dogs",
    items: [
      {
        name: "Classic All-Beef Hot Dog",
        description: "Snappy casing, toasted bun, built your way.",
        note: "Publicly referenced menu item",
      },
      {
        name: "Chili Dog",
        description: "Bold chili, melted cheese, all the comfort.",
        note: "Mentioned in public reviews — confirm with owner",
      },
      {
        name: "Hot Link",
        description: "Spicy, smoky, and packed with heat.",
        note: "Suggested based on public themes — confirm with owner",
      },
    ],
  },
  {
    name: "Sausages",
    items: [
      {
        name: "Polish Sausage",
        description: "Classic Eastern European style with bold snap.",
        note: "Suggested based on public themes — confirm with owner",
      },
      {
        name: "Louisiana-Style Sausage",
        description: "Spiced and smoky with Cajun soul.",
        note: "Suggested based on public themes — confirm with owner",
      },
    ],
  },
  {
    name: "Specialty",
    items: [
      {
        name: "Beyond Sausage (Vegetarian)",
        description: "Plant-based, grilled, and loaded with toppings.",
        note: "Suggested based on public themes — confirm with owner",
      },
    ],
  },
];

export const toppings = [
  "Grilled Onions",
  "Sauerkraut",
  "Relish",
  "Jalapeños",
  "Pickles",
  "Tomato",
  "Sport Peppers",
  "Coleslaw",
];

export const sauces = [
  "Classic Yellow Mustard",
  "Spicy Brown Mustard",
  "Ketchup",
  "Mayo",
  "BBQ Sauce",
  "Sriracha",
  "Chili",
  "Cheese Sauce",
];

export const buildSteps = [
  {
    step: 1,
    title: "Pick Your Base",
    options: [
      "All-Beef Hot Dog",
      "Polish Sausage",
      "Louisiana-Style",
      "Beyond Sausage",
    ],
  },
  {
    step: 2,
    title: "Choose Your Bun",
    options: ["Toasted Classic", "Pretzel Bun", "Soft Potato Bun"],
  },
  {
    step: 3,
    title: "Load Up Toppings",
    options: toppings,
  },
  {
    step: 4,
    title: "Drizzle Sauce",
    options: sauces,
  },
];

// Review themes paraphrased from public sentiment.
// These are NOT fake quotes — they are anonymized themes.
export const reviewThemes = [
  {
    theme: "Quick, friendly service that keeps the line moving.",
    source: "Public review theme",
  },
  {
    theme: "The chili dog hits every time — rich, savory, and satisfying.",
    source: "Public review theme",
  },
  {
    theme: "Serious sausage snap. You can tell the quality is there.",
    source: "Public review theme",
  },
  {
    theme: "Love eating outside at The Village — perfect lunch spot.",
    source: "Public review theme",
  },
  {
    theme: "Staff is always welcoming and the dogs come out fast.",
    source: "Public review theme",
  },
];

export const faqs = [
  {
    question: "Where is Stang's located?",
    answer: `Stang's is located at ${businessInfo.address.full}, right near ${businessInfo.locationContext}.`,
  },
  {
    question: "Does Stang's have outdoor seating?",
    answer:
      "Yes — public mentions note relaxed outdoor dining. Perfect for a sunny Corte Madera lunch.",
  },
  {
    question: "Are vegetarian options available?",
    answer:
      "Public themes suggest a Beyond sausage / vegetarian-friendly option may be available. Please confirm with staff when ordering.",
  },
  {
    question: "Can I call ahead?",
    answer: `You can call Stang's at ${businessInfo.phone} to check availability or ask about the menu.`,
  },
  {
    question: "What are the hours?",
    answer:
      "Hours are currently unverified in public sources. We recommend calling ahead or checking on-site for current hours.",
  },
  {
    question: "Is Stang's good for a quick lunch?",
    answer:
      "Absolutely. It's right at The Village at Corte Madera — ideal for a fast, flavorful lunch while shopping or on a break.",
  },
  {
    question: "Is parking available at The Village?",
    answer:
      "Yes, The Village at Corte Madera offers ample parking for shoppers and visitors.",
  },
];

export const ctaData = {
  headline: "Hungry now? Stang's is right here.",
  subheadline: "Stop by The Village at Corte Madera and build your perfect dog today.",
  buttons: [
    { label: "Call Now", href: businessInfo.phoneLink, external: true },
    { label: "Get Directions", href: businessInfo.mapsUrl, external: true },
    { label: "View Menu", href: "#menu", external: false },
  ],
};

export const footerLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Build Your Dog", href: "#build" },
  { label: "Why Stang's", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const ownerConfirmationItems = [
  "Exact current menu items and descriptions",
  "Exact current prices",
  "Exact current hours of operation",
  "Official food photos",
  "Online ordering link (if any)",
  "Catering availability",
  "Social media links (Facebook, Instagram, etc.)",
  "Review usage permissions",
  "Vegetarian/vegan options details",
  "Beer and drink menu details",
  "Local vendor partnerships (Prather Ranch, Aidell's, etc.)",
];

export const upgradeRoadmap = [
  "Add real menu with photos and prices",
  "Integrate online ordering (Square, Toast, etc.)",
  "Pull in live Google reviews",
  "Add full photo gallery",
  "Add email/catering inquiry form",
  "Add Google Analytics",
  "Add QR code menu for tableside ordering",
  "Add loyalty program",
  "Add SMS lunch specials",
  "Add seasonal specials section",
  "Add owner dashboard for menu updates",
];
