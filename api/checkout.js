import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Server-side price map — the ONLY source of truth for what gets charged.
// Clients never send prices. Keep names/prices in sync with src/data/site.ts.
const CATALOG = {
  "wireless-earbuds": { name: "Wireless Earbuds", price: 4999 },
  "smart-lamp": { name: "Smart Lamp", price: 3400 },
  "gift-box-classic": { name: "Classic Gift Box", price: 2500 },
  "scented-candle-set": { name: "Scented Candle Set", price: 1950 },
  "everyday-tee": { name: "Everyday Tee", price: 1800 },
  "denim-jacket": { name: "Denim Jacket", price: 6500 },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { items } = req.body || {};
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }
    const line_items = items.map(({ slug, qty }) => {
      const product = CATALOG[slug];
      if (!product || !Number.isInteger(qty) || qty < 1 || qty > 99) {
        throw new Error("Invalid cart item");
      }
      return {
        quantity: qty,
        price_data: {
          currency: "usd",
          unit_amount: product.price,
          product_data: { name: product.name },
        },
      };
    });
    const siteUrl = req.headers.origin || "https://website-demo-blush-ten.vercel.app";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
    });
    return res.status(200).json({ url: session.url });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}
