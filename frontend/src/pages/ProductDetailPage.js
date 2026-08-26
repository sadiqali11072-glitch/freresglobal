import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import CTASection from "@/components/site/CTASection";
import { CONTACT, PRODUCT_CATEGORIES } from "@/lib/site-data";
import { findProduct, productsByCategory, waOrderLink } from "@/lib/products-data";

const ease = [0.2, 0.8, 0.2, 1];

export default function ProductDetailPage() {
  const { categorySlug, productSlug } = useParams();
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug);
  const product = findProduct(categorySlug, productSlug);

  if (!category || !product) {
    return (
      <main data-testid="product-not-found">
        <PageHeader
          eyebrow="[ Products ]"
          title="That listing isn't there anymore."
          subtitle="It may have been updated or removed. Browse the category instead, or ask us directly."
        />
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 pb-28 flex flex-wrap gap-4">
          <Link to={`/products/${categorySlug || ""}`} className="btn-pill">
            Back to category <ArrowUpRight size={14} />
          </Link>
          <Link to="/products" className="btn-pill">
            All categories <ArrowUpRight size={14} />
          </Link>
        </div>
      </main>
    );
  }

  const related = productsByCategory(categorySlug).filter((p) => p.slug !== productSlug).slice(0, 3);
  const orderHref = CONTACT.whatsapp
    ? waOrderLink(CONTACT.whatsapp.number, product, category.title)
    : null;

  return (
    <main data-testid="product-detail-page">
      <section className="relative pt-40 md:pt-48 pb-16">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          <div className="mono-label text-zinc-500 mb-8">
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            {" / "}
            <Link to={`/products/${category.slug}`} className="hover:text-white transition-colors">
              {category.title}
            </Link>
            {" / "}
            <span className="text-zinc-300">{product.model}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mono-label text-zinc-500 mb-3">{product.brand}</div>
            <h1
              data-testid="product-title"
              className="font-display text-4xl md:text-5xl tracking-tighter leading-[0.98]"
            >
              {product.model}
            </h1>
            {product.summary && (
              <p className="mt-6 text-zinc-400 leading-relaxed max-w-2xl text-lg">
                {product.summary}
              </p>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {orderHref && (
                <a
                  href={orderHref}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="order-whatsapp"
                  className="btn-solid"
                >
                  <MessageCircle size={16} /> Order on WhatsApp
                </a>
              )}
              <Link
                to={`/request-a-quote?interest=${category.slug}`}
                data-testid="product-quote-link"
                className="btn-pill"
              >
                Request a formal quote <ArrowUpRight size={14} />
              </Link>
            </div>
            <p className="mt-4 text-xs text-zinc-500 max-w-md">
              Price and stock are confirmed over WhatsApp or your quote — they aren't
              published on the site since sourcing terms vary by order.
            </p>
          </motion.div>

          {product.specs && product.specs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="mt-16 border border-white/[0.08] bg-[#080808]"
            >
              <div className="mono-label px-6 md:px-8 pt-6 text-zinc-500">Specifications</div>
              <div className="divide-y divide-white/[0.06] mt-4">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-2 gap-6 px-6 md:px-8 py-4 text-sm"
                  >
                    <span className="text-zinc-500">{s.label}</span>
                    <span className="text-zinc-200">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-white/[0.07]">
              <div className="mono-label mb-6 text-zinc-500">More in {category.title}</div>
              <div className="grid sm:grid-cols-3 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/products/${category.slug}/${p.slug}`}
                    className="block border border-white/[0.08] bg-[#080808] p-5 hover:border-white/25 transition-colors"
                  >
                    <div className="mono-label text-zinc-500 mb-2">{p.brand}</div>
                    <div className="text-base">{p.model}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Buying in bulk?"
        title="Fleet orders run through the same quote flow, one line per model."
      />
    </main>
  );
}
