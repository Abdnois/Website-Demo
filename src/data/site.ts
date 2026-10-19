export type Category = "gadgets" | "gifts" | "clothes";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number; // shows strikethrough "sale" price
  images: string[]; // gallery; images[0] is the card thumbnail
  category: Category;
  description: string;
  details: string[]; // bullet list on product page
  rating: number; // 0–5
  reviews: number;
  stock: number;
  badge?: "New" | "Bestseller" | "Sale";
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  text: string;
  location: string;
}

export interface SiteData {
  name: string;
  tagline: string;
  description: string;
  currency: string;
  announcement: string;
  url: string; // production URL, used for SEO/OG
  contact: { email: string; phone: string; address: string };
  socials: { label: string; url: string }[];
  categories: { id: Category; label: string; blurb: string }[];
  trust: { icon: string; title: string; text: string }[];
  testimonials: Testimonial[];
  products: Product[];
  navigation: { label: string; href: string }[];
}

export const site: SiteData = {
  name: "Demo Store",
  tagline: "Gadgets, gifts & good fits.",
  description:
    "Demo Store sells gadgets, gifts and clothes online. Free shipping over $50, 30-day returns, secure checkout.",
  currency: "$",
  announcement: "🚚 Free shipping on orders over $50 — no code needed",
  url: "https://website-demo-blush-ten.vercel.app",
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
  trust: [
    { icon: "🚚", title: "Free Shipping", text: "On all orders over $50" },
    { icon: "↩️", title: "30-Day Returns", text: "No questions asked" },
    { icon: "🔒", title: "Secure Checkout", text: "256-bit SSL encryption" },
    { icon: "⭐", title: "4.9/5 Rated", text: "From 2,000+ happy customers" },
  ],
  testimonials: [
    {
      name: "Sarah M.",
      text: "Ordered a gift box for my sister's birthday — arrived in two days, beautifully packed. She loved it.",
      location: "Austin, TX",
    },
    {
      name: "James K.",
      text: "The earbuds punch way above their price. Shipping was fast and returns were painless when I sized up on the tee.",
      location: "Denver, CO",
    },
    {
      name: "Priya R.",
      text: "My go-to store for last-minute gifts. The quality is consistent and support actually replies.",
      location: "Seattle, WA",
    },
  ],
  products: [
    {
      id: "p1",
      slug: "wireless-earbuds",
      name: "Wireless Earbuds",
      price: 49.99,
      compareAtPrice: 69.99,
      images: [
        "/images/wireless-earbuds-1.jpg",
        "/images/wireless-earbuds-2.jpg",
        "/images/wireless-earbuds-3.jpg",
      ],
      category: "gadgets",
      description: "Compact earbuds with 24h battery life, USB-C charging and crystal-clear calls.",
      details: ["24h total battery with case", "Bluetooth 5.3, instant pairing", "IPX5 water resistant", "USB-C fast charge"],
      rating: 4.8,
      reviews: 342,
      stock: 15,
      badge: "Sale",
      featured: true,
    },
    {
      id: "p2",
      slug: "smart-lamp",
      name: "Smart Lamp",
      price: 34.0,
      images: ["/images/smart-lamp-1.webp"],
      category: "gadgets",
      description: "App-controlled RGB lamp with sunrise alarm mode and 16M colors.",
      details: ["16M colors, app + voice control", "Sunrise alarm simulation", "Works with Alexa & Google Home"],
      rating: 4.6,
      reviews: 128,
      stock: 22,
      badge: "Bestseller",
      featured: true,
    },
    {
      id: "p3",
      slug: "gift-box-classic",
      name: "Classic Gift Box",
      price: 25.0,
      images: [
        "/images/classic-gift-box-1.avif",
        "/images/classic-gift-box-2.avif",
        "/images/classic-gift-box-3.avif",
      ],
      category: "gifts",
      description: "A curated box of small delights — perfect for any occasion.",
      details: ["6 hand-picked items", "Gift wrap + handwritten note included", "Ships in 24h"],
      rating: 4.9,
      reviews: 512,
      stock: 40,
      featured: true,
    },
    {
      id: "p4",
      slug: "scented-candle-set",
      name: "Scented Candle Set",
      price: 19.5,
      compareAtPrice: 27.0,
      images: [
        "/images/scented-candle-set-1.avif",
        "/images/scented-candle-set-2.avif",
        "/images/scented-candle-set-3.avif",
      ],
      category: "gifts",
      description: "Three soy candles: vanilla, sandalwood, fresh linen.",
      details: ["100% soy wax, 40h burn each", "Cotton wicks, no soot", "Reusable glass jars"],
      rating: 4.7,
      reviews: 96,
      stock: 8,
      badge: "Sale",
    },
    {
      id: "p5",
      slug: "everyday-tee",
      name: "Everyday Tee",
      price: 18.0,
      images: ["/images/everyday-tee-1.avif"],
      category: "clothes",
      description: "100% organic cotton tee. Pre-shrunk, unisex fit.",
      details: ["100% organic cotton", "Unisex fit, true to size", "Machine washable"],
      rating: 4.5,
      reviews: 210,
      stock: 60,
      featured: true,
    },
    {
      id: "p6",
      slug: "denim-jacket",
      name: "Denim Jacket",
      price: 65.0,
      images: [
        "/images/denim-jacket-1.avif",
        "/images/denim-jacket-2.avif",
      ],
      category: "clothes",
      description: "Classic mid-wash denim jacket with a relaxed cut.",
      details: ["100% cotton denim", "Relaxed unisex cut", "Four pockets, button front"],
      rating: 4.4,
      reviews: 74,
      stock: 12,
      badge: "New",
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
