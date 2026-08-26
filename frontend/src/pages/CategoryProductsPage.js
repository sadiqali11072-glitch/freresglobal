import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import CTASection from "@/components/site/CTASection";
import { PRODUCT_CATEGORIES } from "@/lib/site-data";
import { productsByCategory } from "@/lib/products-data";

const ease = [0.2, 0.8, 0.2, 1];

export default function CategoryProductsPage() {
  const { categorySlug } = useParams();
  const [query, setQuery] = useState("");
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug);
  const allProducts = useMemo(() => productsByCategory(categorySlug), [categorySlug]);

  const products = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allProducts;
    return allProducts.filter(
      (p) => p.brand.toLowerCase().includes(q) || p.model.toLowerCase().includes(q)
    );
  }, [allProducts, query]);

  if (!category) {
    return (
      <main data-testid="category-not-found">
        <PageHeader
          eyebrow="[ Products ]"
          title="Category not found."
          subtitle="That product category doesn't exist. Browse all categories instead."
        />
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 pb-28">
          <Link to="/products" className="btn-pill">
            View all categories <ArrowUpRight size={14} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main data-testid="category-products-page">
      <PageHeader
        eyebrow={`[ Products / ${category.title} ]`}
        title={category.title}
        subtitle={category.blurb}
      />

      <section className="relative pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div className="relative w-full md:max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                data-testid="category-search"
                className="field pl-11"
                placeholder={`Search ${category.title.toLowerCase()}…`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Link
              to={`/request-a-quote?interest=${category.slug}`}
              data-testid="category-quote-link"
              className="btn-pill shrink-0"
            >
              Request a quote for this category <ArrowUpRight size={14} />
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease, delay: (i % 6) * 0.04 }}
                >
                  <Link
                    to={`/products/${category.slug}/${p.slug}`}
                    data-testid={`product-card-${p.slug}`}
                    className="block h-full border border-white/[0.08] bg-[#080808] p-6 hover:border-white/25 transition-colors"
                  >
                    <div className="mono-label text-zinc-500 mb-3">{p.brand}</div>
                    <h3 className="font-display text-xl tracking-tight">{p.model}</h3>
                    {p.summary && (
                      <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{p.summary}</p>
                    )}
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-white/80">
                      View details <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div
              data-testid="category-empty-state"
              className="border border-white/[0.08] bg-[#080808] p-10 md:p-14 text-center"
            >
              <p className="text-zinc-300 text-lg max-w-xl mx-auto leading-relaxed">
                We're still building out the listed catalogue for{" "}
                {category.title.toLowerCase()}. Tell us what you're after and
                we'll come back with options and pricing.
              </p>
              <Link
                to={`/request-a-quote?interest=${category.slug}`}
                data-testid="category-empty-quote-link"
                className="btn-solid mt-8 inline-flex"
              >
                Request a quote <ArrowUpRight size={16} />
              </Link>
            </div>
          )}

          {category.families && (
            <div className="mt-16 pt-10 border-t border-white/[0.07]">
              <div className="mono-label mb-6 text-zinc-500">Browse by brand &amp; family</div>
              <div className="flex flex-wrap gap-8">
                {category.families.map((f) => (
                  <div key={f.brand}>
                    <div className="mono-label text-zinc-500 mb-2">{f.brand}</div>
                    <div className="flex flex-wrap gap-2">
                      {f.lines.map((l) => (
                        <span key={l} className="chip">
                          <span className="chip-dot bg-brand-blue" />
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Not listed yet?"
        title="If it's not on the shelf, we'll source it back-to-back."
        subtitle="A multi-line quote can carry more than one product at once."
      />
    </main>
  );
}
