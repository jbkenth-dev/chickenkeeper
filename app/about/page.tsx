"use client";

import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Truck, Users, ChefHat, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-black mb-6">
              OUR STORY
            </span>
            <h1 className="text-4xl font-black sm:text-6xl mb-8 leading-tight">
              We're on a <span className="text-gradient">Mission</span> to Serve Happiness.
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed mb-6">
              Chickenkeeper started with a simple idea: that fast food shouldn't mean compromise. We believed that high-quality, fresh ingredients and family recipes could create an experience that feels like home.
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Today, we craft crispy fried classics and smoky grilled plates, using only the finest locally sourced chicken and our secret blend of spices that have been perfected over generations.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-foreground/5">
              <div>
                <div className="text-4xl font-black text-primary mb-1">10+</div>
                <div className="text-xs font-black uppercase tracking-widest text-foreground/40">Locations</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary mb-1">50k+</div>
                <div className="text-xs font-black uppercase tracking-widest text-foreground/40">Customers</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary mb-1">4.9</div>
                <div className="text-xs font-black uppercase tracking-widest text-foreground/40">Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-[4rem] shadow-2xl">
              <Image
                src="/test.jpg"
                alt="Restaurant kitchen"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-[2rem] shadow-xl border border-foreground/5 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                  <ChefHat className="text-charcoal" />
                </div>
                <div>
                  <div className="font-black text-charcoal">Expert Chefs</div>
                  <div className="text-sm text-charcoal/60">Crafted with passion</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="text-primary" size={32} />,
              title: "Quality First",
              desc: "We never compromise on our ingredients. Fresh, never frozen, always local."
            },
            {
              icon: <Truck className="text-primary" size={32} />,
              title: "Fast & Fresh",
              desc: "Our delivery is optimized to ensure your meal arrives hot and crispy every time."
            },
            {
              icon: <Heart className="text-primary" size={32} />,
              title: "Community Focused",
              desc: "We believe in giving back to the neighborhoods that have supported us from day one."
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-10 rounded-[3rem] border border-foreground/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors inline-block">
                {value.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{value.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
