"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MenuItem } from "@/app/data/menu";
import { useCart } from "@/app/providers/CartProvider";
import { useUI } from "@/app/providers/UIProvider";
import { ShoppingCart, Plus, Star, ArrowRight } from "lucide-react";
import { formatPHP } from "@/app/lib/currency";

export function MenuCard({ item }: { item: MenuItem }) {
  const { add } = useCart();
  const { openCart } = useUI();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-card p-3 shadow-sm transition-all hover:shadow-2xl hover:shadow-primary/10 border border-foreground/5 dark:border-white/5"
    >
      <Link href={`/food/${item.slug}`} className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] block">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-4 top-4 flex flex-col gap-2 z-10">
          {item.bestSeller && (
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-1.5 rounded-full bg-accent/90 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-charcoal shadow-xl border border-white/20"
            >
              <Star size={12} fill="currentColor" />
              Best Seller
            </motion.span>
          )}
          {item.promotion && (
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="rounded-full bg-primary/90 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl border border-white/20"
            >
              {item.promotion}
            </motion.span>
          )}
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-10 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
           <div className="flex flex-col gap-2">
             <p className="text-xs font-bold text-white/80 line-clamp-2 leading-relaxed">
               {item.ingredients.slice(0, 3).join(" • ")}
             </p>
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
               <span>View details</span>
               <ArrowRight size={12} />
             </div>
           </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-col gap-1 mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{item.category}</span>
          <h3 className="text-xl font-black leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {item.name}
          </h3>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground/20 line-through decoration-primary/20 decoration-2">
              {formatPHP(item.price * 1.2)}
            </span>
            <span className="text-2xl font-black text-primary drop-shadow-sm">
              {formatPHP(item.price)}
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              add(item, 1);
              openCart();
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background transition-all hover:bg-primary hover:text-white shadow-lg shadow-foreground/5 hover:shadow-primary/20"
          >
            <Plus size={24} strokeWidth={3} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
