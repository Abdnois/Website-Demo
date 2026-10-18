export type Category = "gadgets" | "gifts" | "clothes";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  description: string;
  featured?: boolean;
}

export interface SiteData {
  name: string;
  tagline: string;
  description: string;
  currency: string;
  contact: { email: string; phone: string; address: string };
  socials: { label: string; url: string }[];
  categories: { id: Category; label: string; blurb: string }[];
  products: Product[];
  navigation: { label: string; href: string }[];
}

export const site: SiteData = {
  name: "Demo Store",
  tagline: "Gadgets, gifts & good fits.",
  description:
    "Demo Store sells gadgets, gifts and clothes online. Fast shipping, fair prices.",
  currency: "$",
  contact: {
    email: "hello@demostore.com",
    phone: "+1 555 010 0100",
    address: "123 Market St, Springfield",
  },
  socials: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "TikTok", url: "https://tiktok.com" },
  ],
  categories: [
    { id: "gadgets", label: "Gadgets", blurb: "Tech that makes life easier." },
    { id: "gifts", label: "Gifts", blurb: "Thoughtful picks for every occasion." },
    { id: "clothes", label: "Clothes", blurb: "Everyday fits, done right." },
  ],
  products: [
    {
      id: "p1",
      slug: "wireless-earbuds",
      name: "Wireless Earbuds",
      price: 49.99,
      image: "https://picsum.photos/seed/earbuds/600/600",
      category: "gadgets",
      description: "Compact earbuds with 24h battery life and USB-C charging.",
      featured: true,
    },
    {
      id: "p2",
      slug: "smart-lamp",
      name: "Smart Lamp",
      price: 34.0,
      image: "https://picsum.photos/seed/lamp/600/600",
      category: "gadgets",
      description: "App-controlled RGB lamp with sunrise alarm mode.",
      featured: true,
    },
    {
      id: "p3",
      slug: "gift-box-classic",
      name: "Classic Gift Box",
      price: 25.0,
      image: "https://picsum.photos/seed/giftbox/600/600",
      category: "gifts",
      description: "A curated box of small delights — perfect for any occasion.",
      featured: true,
    },
    {
      id: "p4",
      slug: "scented-candle-set",
      name: "Scented Candle Set",
      price: 19.5,
      image: "https://picsum.photos/seed/candle/600/600",
      category: "gifts",
      description: "Three soy candles: vanilla, sandalwood, fresh linen.",
    },
    {
      id: "p5",
      slug: "everyday-tee",
      name: "Everyday Tee",
      price: 18.0,
      image: "https://picsum.photos/seed/tee/600/600",
      category: "clothes",
      description: "100% organic cotton tee. Pre-shrunk, unisex fit.",
      featured: true,
    },
    {
      id: "p6",
      slug: "denim-jacket",
      name: "Denim Jacket",
      price: 65.0,
      image: "https://picsum.photos/seed/denim/600/600",
      category: "clothes",
      description: "Classic mid-wash denim jacket with a relaxed cut.",
    },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "Contact", href: "/contact" },
    { label: "Cart", href: "/cart" },
  ],
};

export const formatPrice = (price: number, currency: string): string =>
  `${currency}${price.toFixed(2)}`;

export const getProduct = (slug: string): Product | undefined =>
  site.products.find((p) => p.slug === slug);
