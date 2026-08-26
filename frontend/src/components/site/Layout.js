import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // wait a tick for the new page to render before scrolling
        setTimeout(() => {
          if (window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -100, duration: 1.1 });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 60);
        return;
      }
    }
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="relative overflow-hidden">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
