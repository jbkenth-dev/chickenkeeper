"use client";

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { menu } from "./data/menu";
import { MenuCard } from "./components/MenuCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { Megaphone, Truck, Shield, Clock, Percent, Sparkles, ArrowRight, Star, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featured = menu.filter((m) => m.bestSeller).slice(0, 4);
  const promos = menu.filter((m) => m.promotion).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black sm:text-5xl"
          >
            Why Choose <span className="text-gradient">Chickenkeeper?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-foreground/60"
          >
            We don't just cook chicken; we craft experiences. From our secret spice blend to our lightning-fast delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Clock className="text-primary" size={28} />,
              title: "Fast Delivery",
              text: "Hot and fresh chicken at your doorstep in 30 mins.",
            },
            {
              icon: <Shield className="text-primary" size={28} />,
              title: "Quality Assured",
              text: "100% fresh, never frozen chicken from local farms.",
            },
            {
              icon: <Truck className="text-primary" size={28} />,
              title: "Free Shipping",
              text: "Zero delivery fees on all orders over ₱1,200.",
            },
            {
              icon: <Heart className="text-primary" size={28} />,
              title: "Made with Love",
              text: "Secret family recipes passed down through generations.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-[2rem] bg-card shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group border border-foreground/5"
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{f.title}</h3>
              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="bg-charcoal py-16 sm:py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full blur-[80px] sm:blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent rounded-full blur-[80px] sm:blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black sm:text-5xl mb-3 sm:mb-4">
                Our <span className="text-primary">Best Sellers</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg">
                The dishes that made us famous. Try our fan favorites.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm sm:text-base"
            >
              View Full Menu <ArrowRight size={18} className="sm:size-[20px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-accent p-6 sm:p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-12 translate-x-1/4" />

          <div className="relative z-10 lg:w-1/2 text-center lg:text-left">
            <span className="inline-block bg-charcoal text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              LIMITED TIME OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-charcoal leading-tight mb-4 sm:mb-6">
              Get <span className="text-white">20% OFF</span> Your First Order!
            </h2>
            <p className="text-charcoal/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              Use code <span className="font-bold text-charcoal">CHICKEN20</span> at checkout. Valid for new customers.
            </p>
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Claim Discount
            </Link>
          </div>

          <div className="relative z-10 lg:w-1/2 w-full aspect-[4/3] sm:aspect-video md:aspect-square">
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/test.jpg"
                alt="Chicken Bucket"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
