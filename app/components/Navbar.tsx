"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu as MenuIcon, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/app/providers/CartProvider";
import Image from "next/image";
import { useUI } from "@/app/providers/UIProvider";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const { openCart, isCartOpen } = useUI();
  const distinct = cart.lines.length;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-charcoal/5 shadow-sm py-1.5 sm:py-2"
          : "bg-white py-3 sm:py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-24"}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-4"
          >
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-1 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-md border border-charcoal/5 ${scrolled ? "h-8 w-8 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-14 sm:w-14"}`}>
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src="/logo.jpg"
                    alt="Chickenkeeper"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-black tracking-tight text-black leading-none transition-all duration-500 ${scrolled ? "text-sm sm:text-lg" : "text-base sm:text-2xl"}`}>
                  CHICKENKEEPER
                </span>
                <AnimatePresence>
                  {!scrolled && (
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-0.5 sm:mt-1 text-[7px] sm:text-[9px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-black/40 uppercase"
                    >
                      UNLIMITED RICE
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-1 bg-charcoal/5 p-1.5 rounded-2xl border border-charcoal/5">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="relative px-8 py-2.5 text-sm font-black transition-all duration-300"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  pathname === n.href ? "text-white" : "text-black/70 hover:text-black"
                }`}>
                  {n.label}
                </span>
                {pathname === n.href && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-primary rounded-xl shadow-lg shadow-primary/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={openCart}
              className="group relative flex items-center justify-center rounded-xl sm:rounded-2xl bg-charcoal h-10 w-10 sm:h-14 sm:w-14 text-white transition-all hover:bg-charcoal/90 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              <div className="relative">
                <ShoppingCart size={18} className="sm:size-[20px] transition-transform group-hover:-rotate-12" />
                {distinct > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-primary text-[8px] sm:text-[10px] font-black text-white ring-2 ring-charcoal">
                    {distinct}
                  </span>
                )}
              </div>
            </button>

            <button
              className="flex lg:hidden items-center justify-center rounded-xl bg-charcoal/5 p-2.5 sm:p-3.5 text-charcoal transition-all hover:bg-charcoal/10 active:scale-95 h-10 w-10"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden border-t border-charcoal/5 bg-white/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="space-y-2 px-4 py-8">
              {nav.map((n, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={n.href}
                >
                  <Link
                      href={n.href}
                      className={`flex items-center justify-between rounded-2xl px-6 py-4 text-xl font-black transition-all ${
                        pathname === n.href
                          ? "bg-primary text-white shadow-lg shadow-primary/20"
                          : "text-black/60 hover:bg-black/5 hover:text-black"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                    <span>{n.label}</span>
                    {pathname === n.href ? (
                      <motion.div
                        layoutId="mobile-active-dot"
                        className="h-2 w-2 rounded-full bg-white"
                      />
                    ) : (
                      <ArrowRight size={18} className="opacity-20" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
