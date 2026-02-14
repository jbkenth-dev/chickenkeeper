"use client";

import { useCart } from "@/app/providers/CartProvider";
import type { MenuItem } from "@/app/data/menu";
import { useUI } from "@/app/providers/UIProvider";
import { formatPHP } from "@/app/lib/currency";
import { motion } from "framer-motion";
import { ShoppingCart, Flame, Leaf, Plus, Minus, Share2, Heart } from "lucide-react";
import { useState } from "react";

export default function DetailClient({ item }: { item: MenuItem }) {
  const { add } = useCart();
  const { openCart } = useUI();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-primary">
            <Flame size={16} fill="currentColor" />
            <span className="text-sm font-bold">{item.calories} kcal</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-foreground/20" />
          <div className="flex items-center gap-1 text-green-500">
            <Leaf size={16} fill="currentColor" />
            <span className="text-sm font-bold">100% Fresh</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          {item.name}
        </h1>

        <p className="text-lg text-foreground/60 leading-relaxed mb-8 max-w-xl">
          {item.description}
        </p>

        <div className="mb-8">
          <h3 className="text-sm font-black uppercase tracking-widest text-foreground/40 mb-4">
            Ingredients
          </h3>
          <div className="flex flex-wrap gap-2">
            {item.ingredients.map((ing, i) => (
              <span 
                key={i}
                className="px-4 py-2 rounded-xl bg-card border border-foreground/5 text-sm font-bold"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-foreground/5">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground/40 mb-1">Price</span>
            <span className="text-4xl font-black text-primary">{formatPHP(item.price)}</span>
          </div>

          <div className="flex items-center gap-4 bg-card rounded-full p-2 border border-foreground/5">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Minus size={18} />
            </button>
            <span className="w-8 text-center font-black text-lg">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>

          <button
            aria-label="Add to cart"
            onClick={() => {
              add(item, quantity);
              openCart();
            }}
            className="flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-5 text-white font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-charcoal/20"
          >
            <ShoppingCart size={24} />
            Add to Cart
          </button>

          <div className="flex gap-2">
            <button className="w-14 h-14 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-card transition-colors">
              <Heart size={24} />
            </button>
            <button className="w-14 h-14 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-card transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
