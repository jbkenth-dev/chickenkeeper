"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-1.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-30 sm:opacity-40"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold text-primary mb-6"
            >
              <Star size={14} className="sm:size-[16px]" fill="currentColor" />
              <span>The best Unli Rice</span>
            </motion.div>

            <motion.h1
              className="text-4xl font-black tracking-tight text-foreground sm:text-7xl leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Online Order, <br />
              <span className="text-gradient">Fresh Chicken</span>
            </motion.h1>

            <motion.p
              className="mt-6 sm:mt-8 text-lg sm:text-xl text-foreground/60 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Savor the crunch of our signature crispy fried chicken or the smoky perfection of our grilled specialties.
            </motion.p>

            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/menu"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-primary/30 hover:-translate-y-1"
              >
                Order Now
                <ArrowRight size={18} className="sm:size-[20px] transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-foreground/10 px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Our Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 sm:mt-12 flex items-center justify-center lg:justify-start gap-6 sm:gap-8"
            >
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold">12k+</span>
                <span className="text-xs sm:text-sm text-foreground/50">Happy Customers</span>
              </div>
              <div className="h-8 sm:h-10 w-px bg-foreground/10" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold">4.9</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="sm:size-[14px] text-primary" fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden sm:block lg:block"
          >
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-[40px] rotate-6" />
              <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl rotate-3">
                <Image
                  src="/hero-2.jpg"
                  alt="Signature crispy chicken platter"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-charcoal/5"
              >
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40">Best Choice</p>
                  <p className="text-sm font-black">Top Rated Platter</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
