import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main data-testid="not-found-page" className="min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-32">
        <div className="mono-label mb-6">[ 404 ]</div>
        <h1 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.98]">
          That page doesn&apos;t exist.
        </h1>
        <p className="mt-6 text-zinc-400 max-w-lg leading-relaxed">
          The page you're looking for may have moved. Head back home, or go
          straight to a quote.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/" data-testid="404-home" className="btn-solid">
            Back to home <ArrowUpRight size={16} />
          </Link>
          <Link to="/request-a-quote" data-testid="404-quote" className="btn-pill">
            Request a quote <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
