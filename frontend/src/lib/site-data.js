// Central content data for the Freres Global site.
// Keep this the single source of truth for nav, brands, categories and
// contact details so every page stays consistent and easy to expand.
// NOTE: no invented stats, certifications, counts, or contact details —
// only what's been confirmed. Add to these lists as real data comes in.

export const CONTACT = {
  phones: [
    { label: "Ghana", number: "+233 256 599 885", href: "tel:+233256599885" },
    { label: "Ghana", number: "+233 271 642 772", href: "tel:+233271642772" },
  ],
  locations: [
    { label: "Home base", value: "Accra, Ghana" },
    { label: "Sourcing office", value: "Dubai, UAE" },
  ],
};

export const NAV_ITEMS = [
  { id: "home", label: "Home", to: "/" },
  {
    id: "products",
    label: "Products",
    to: "/products",
    children: [
      { label: "All product categories", to: "/products" },
      { label: "Brands we supply", to: "/brands" },
    ],
  },
  { id: "brands", label: "Brands", to: "/brands" },
  {
    id: "solutions",
    label: "Solutions",
    to: "/solutions",
    children: [
      { label: "By business need", to: "/solutions" },
      { label: "Dealers & Resellers", to: "/dealers" },
      { label: "Government & Institutions", to: "/government" },
    ],
  },
  { id: "about", label: "About", to: "/about" },
  { id: "global-sourcing", label: "Global Sourcing", to: "/global-sourcing" },
  { id: "contact", label: "Contact", to: "/contact" },
];

// 40+ brands supplied — grouped loosely by the kind of hardware/software
// each is best known for. Phrased as "brands we supply," not "authorised
// distributor," per the founder's content-accuracy guidance.
export const BRAND_GROUPS = [
  {
    title: "Computing & Devices",
    brands: ["Lenovo", "Dell", "HP", "Apple", "Acer", "ASUS", "MSI", "Razer"],
  },
  {
    title: "Storage & Memory",
    brands: ["Seagate", "Crucial", "Lexar", "Western Digital", "SanDisk", "Micron", "Kingston", "Kioxia", "Transcend", "ADATA", "Hiksemi"],
  },
  {
    title: "Compute, Networking & Security Hardware",
    brands: ["Cisco", "Huawei", "D-Link", "TP-Link", "Ubiquiti", "Tenda", "Hikvision", "NVIDIA", "AMD", "Intel", "Samsung", "Gigabyte"],
  },
  {
    title: "Peripherals & Displays",
    brands: ["Logitech", "AOC", "BenQ", "ViewSonic", "Hama", "Imation", "Verbatim"],
  },
  {
    title: "Printing & Imaging",
    brands: ["Epson", "Canon", "Xerox", "Ricoh"],
  },
  {
    title: "Software & Security",
    brands: ["Microsoft", "Kaspersky", "Norton"],
  },
];

export const ALL_BRANDS = BRAND_GROUPS.flatMap((g) => g.brands);

// Product categories — architecture built to expand. Laptops/desktops
// follow a Brand → Product Family → Model → Quote/Buy discovery pattern
// once real catalog data is loaded; for now each category links through
// to the Request a Quote flow pre-filled with that category.
export const PRODUCT_CATEGORIES = [
  {
    slug: "computing",
    n: "01",
    title: "Computing",
    kicker: "Laptops · Desktops · Workstations",
    blurb:
      "Business laptops, desktops, all-in-ones, enterprise workstations and gaming rigs — sourced by brand and product family, from single units to fleet rollouts.",
    families: [
      { brand: "Lenovo", lines: ["ThinkPad", "IdeaPad", "Legion"] },
      { brand: "HP", lines: ["ProBook", "EliteBook", "ZBook", "OmniBook"] },
      { brand: "Dell", lines: ["Pro", "Pro Plus", "Pro Premium", "Gaming"] },
    ],
  },
  {
    slug: "servers-enterprise-compute",
    n: "02",
    title: "Servers & Enterprise Compute",
    kicker: "Rack · Tower · Data centre",
    blurb:
      "Rack and tower servers, enterprise compute and storage arrays — specified and sourced to back-to-back requirements for larger deployments.",
  },
  {
    slug: "storage-memory",
    n: "03",
    title: "Storage & Memory",
    kicker: "SSD · HDD · Flash · RAM",
    blurb:
      "Enterprise and consumer SSDs, HDDs, external drives, flash storage and memory modules from established manufacturers.",
  },
  {
    slug: "networking",
    n: "04",
    title: "Networking",
    kicker: "Routers · Switches · Wireless",
    blurb:
      "Routers, switches, wireless access points and enterprise networking gear for offices, sites and campuses of any size.",
  },
  {
    slug: "security-surveillance",
    n: "05",
    title: "Security & Surveillance",
    kicker: "CCTV · Access control",
    blurb:
      "Surveillance cameras and security hardware, specified to the site and sourced against your requirement.",
  },
  {
    slug: "printing",
    n: "06",
    title: "Printing",
    kicker: "Printers · Toner · Consumables",
    blurb:
      "Office and production printers alongside the toner and consumables to keep them running.",
  },
  {
    slug: "displays",
    n: "07",
    title: "Displays & Monitors",
    kicker: "Business · Professional",
    blurb: "Monitors and displays for desks, meeting rooms and control environments.",
  },
  {
    slug: "accessories-peripherals",
    n: "08",
    title: "Accessories & Peripherals",
    kicker: "Keyboards · Mice · Docks",
    blurb: "The peripherals that finish a workstation or fleet deployment.",
  },
  {
    slug: "software-security",
    n: "09",
    title: "Software & Security Products",
    kicker: "OS · Productivity · Antivirus",
    blurb: "Licensing and security software from Microsoft and established security vendors.",
  },
];

// Solutions organised by business need, not just product type.
export const SOLUTIONS = [
  {
    slug: "business-computing",
    title: "Business Computing",
    blurb:
      "Fleet laptops, desktops and workstations specified, sourced and rolled out for growing teams.",
  },
  {
    slug: "enterprise-infrastructure",
    title: "Enterprise Infrastructure",
    blurb:
      "Servers, storage and compute sourced back-to-back to the specification your project needs.",
  },
  {
    slug: "printing-solutions",
    title: "Printing Solutions",
    blurb: "Office and production printing hardware, with the consumables to match.",
  },
  {
    slug: "security-networking",
    title: "Security & Networking",
    blurb: "Networking and surveillance hardware specified to the site.",
  },
  {
    slug: "workplace-technology",
    title: "Workplace Technology",
    blurb: "Displays, peripherals and the everyday hardware that keeps a workplace running.",
  },
  {
    slug: "procurement-sourcing",
    title: "Procurement & Sourcing",
    blurb:
      "In-Stock supply for what's ready now, and Back-to-Back sourcing — through our Dubai office — for what has to be sourced against your exact requirement.",
  },
];

// The six customer segments the business serves — each needs its own
// framing rather than one generic pitch.
export const SEGMENTS = [
  {
    slug: "corporate",
    title: "Corporate",
    blurb: "Fleet procurement, refresh cycles and IT infrastructure for growing companies.",
  },
  {
    slug: "government",
    title: "Government",
    blurb: "Technology sourcing and implementation for government bodies, handled through a formal procurement process.",
    to: "/government",
  },
  {
    slug: "institutions",
    title: "Institutions",
    blurb: "Including education — hardware sourcing for schools, universities and other institutions.",
    to: "/government",
  },
  {
    slug: "dealers-resellers",
    title: "Dealers & Resellers",
    blurb: "A sourcing partner for businesses that resell hardware to their own customers.",
    to: "/dealers",
  },
  {
    slug: "retail",
    title: "Retail",
    blurb: "Straightforward buying for smaller orders and everyday hardware needs.",
  },
  {
    slug: "individuals",
    title: "Individuals",
    blurb: "A single laptop or component, bought as simply as a fleet order is quoted.",
  },
];

export const CUSTOMER_TYPES = [
  "Corporate",
  "Government",
  "Institution",
  "Dealer / Reseller",
  "Retail",
  "Individual",
];
