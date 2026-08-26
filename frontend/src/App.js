import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Home from "@/pages/Home";
import ProductsPage from "@/pages/ProductsPage";
import BrandsPage from "@/pages/BrandsPage";
import SolutionsPage from "@/pages/SolutionsPage";
import AboutPage from "@/pages/AboutPage";
import GlobalSourcingPage from "@/pages/GlobalSourcingPage";
import ContactPage from "@/pages/ContactPage";
import RequestQuotePage from "@/pages/RequestQuotePage";
import DealersPage from "@/pages/DealersPage";
import GovernmentPage from "@/pages/GovernmentPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.__lenis = lenis;

    // Smooth anchor scroll (in-page hashes only)
    const onAnchorClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -40, duration: 1.2 });
    };
    document.addEventListener("click", onAnchorClick);

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App" data-testid="app-root">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/global-sourcing" element={<GlobalSourcingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/request-a-quote" element={<RequestQuotePage />} />
            <Route path="/dealers" element={<DealersPage />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
