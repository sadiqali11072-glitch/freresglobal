// Individual product / SKU-level catalog data.
//
// This is intentionally EMPTY of real inventory. Freres Global's content
// rule is explicit: never invent product specifications, prices or stock —
// build a structure that can be populated later. This file is that
// structure: add a real entry here (with real specs, sourced from the
// supplier/spec sheet) and it will automatically appear in its category's
// product listing and get its own detail page with an "Order on WhatsApp"
// button. Nothing renders until real entries are added.
//
// Shape of one entry:
// {
//   slug: "unique-url-slug",              // used in /products/:categorySlug/:slug
//   categorySlug: "computing",            // must match a PRODUCT_CATEGORIES slug
//   brand: "Lenovo",
//   model: "ThinkPad E14 Gen 5",
//   summary: "Short one-line description.",
//   specs: [
//     { label: "Processor", value: "Intel Core i5-1335U" },
//     { label: "RAM", value: "16GB DDR4" },
//     { label: "Storage", value: "512GB SSD" },
//   ],
// }

// A small set of representative catalogue entries, one per confirmed
// laptop family (Lenovo ThinkPad, HP ProBook, Dell Pro — see
// PRODUCT_CATEGORIES.computing.families). Specs are sourced from each
// manufacturer's own published spec sheet for a real, current model —
// not invented, and not copied from a competitor's listing. No price or
// stock is stated here; that's confirmed over WhatsApp or a formal quote,
// since it isn't guaranteed inventory. Add more entries the same way
// (brand, model, specs pulled from the manufacturer's own spec sheet) as
// the catalogue grows.
export const PRODUCTS = [
  {
    slug: "thinkpad-e14-gen-7-intel",
    categorySlug: "computing",
    brand: "Lenovo",
    model: "ThinkPad E14 Gen 7 (Intel)",
    summary: "14\" entry-level business laptop from Lenovo's ThinkPad E-series.",
    specs: [
      { label: "Processor", value: "Intel Core 5 210H (Raptor Lake)" },
      { label: "RAM", value: "16GB DDR5-5600 (configurable up to 64GB)" },
      { label: "Storage", value: "512GB M.2 PCIe SSD" },
      { label: "Display", value: "14\" WUXGA (1920×1200) IPS" },
      { label: "Graphics", value: "Intel Graphics (integrated)" },
      { label: "Weight", value: "Starting at 1.34 kg (2.95 lbs)" },
    ],
  },
  {
    slug: "probook-440-g11",
    categorySlug: "computing",
    brand: "HP",
    model: "ProBook 440 G11",
    summary: "14\" business notebook from HP's ProBook line.",
    specs: [
      { label: "Processor", value: "Intel Core Ultra 5 125U, 12-core, up to 4.3GHz" },
      { label: "RAM", value: "16GB (2×8GB) DDR5-5600" },
      { label: "Storage", value: "256GB PCIe NVMe SSD" },
      { label: "Display", value: "14\" IPS touchscreen, 1920×1200 (WUXGA)" },
      { label: "Graphics", value: "Intel Graphics (integrated)" },
      { label: "Weight", value: "1.39 kg (3.06 lbs)" },
    ],
  },
  {
    slug: "dell-pro-14-pc14250",
    categorySlug: "computing",
    brand: "Dell",
    model: "Dell Pro 14 (PC14250)",
    summary: "14\" business laptop from Dell's Pro line.",
    specs: [
      { label: "Processor", value: "Intel Core 5-120U, 10-core, up to 5.0GHz" },
      { label: "RAM", value: "8GB DDR5 (configurable up to 16GB)" },
      { label: "Storage", value: "256GB SSD (upgradable to 512GB)" },
      { label: "Display", value: "14\" FHD+ (1920×1200) IPS, 300 nits, Anti-Glare" },
      { label: "Graphics", value: "Integrated Intel Graphics" },
      { label: "Weight", value: "1.35 kg (2.99 lb)" },
    ],
  },
];

export function productsByCategory(categorySlug) {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function findProduct(categorySlug, productSlug) {
  return PRODUCTS.find((p) => p.categorySlug === categorySlug && p.slug === productSlug);
}

// Builds a WhatsApp deep link pre-filled with a message identifying the
// product, using the site's existing confirmed WhatsApp number — no price
// is included in the message since prices aren't published on the site;
// the conversation is where price and availability get confirmed.
export function waOrderLink(whatsappNumber, product, categoryTitle) {
  const digits = whatsappNumber.replace(/[^0-9]/g, "");
  const text = `Hi Freres Global, I'd like to order: ${product.brand} ${product.model} (${categoryTitle}). Please confirm price and availability.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
