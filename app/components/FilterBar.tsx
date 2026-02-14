"use client";

import { categories } from "@/app/data/menu";
import { useEffect, useState } from "react";
import { Search, SlidersHorizontal, Drumstick, Flame, Package, Cookie, CupSoda, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const categoryIcons: Record<string, any> = {
  fried: Drumstick,
  grilled: Flame,
  combos: Package,
  sides: Cookie,
  drinks: CupSoda,
};

export function FilterBar({
  onSearch,
  onCategory,
}: {
  onSearch: (q: string) => void;
  onCategory: (c: string | null) => void;
}) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => onSearch(q), 250);
    return () => clearTimeout(t);
  }, [q, onSearch]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xl group">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-focus-within:bg-primary/10 transition-all duration-500" />
          <div className="relative flex items-center bg-card dark:bg-zinc-900 rounded-2xl border border-foreground/5 dark:border-white/5 shadow-sm transition-all focus-within:shadow-lg focus-within:border-primary/20">
            <div className="pl-5 text-foreground/30">
              <Search size={20} />
            </div>
            <input
              type="text"
              aria-label="Search menu"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="What are you craving today?"
              className="w-full bg-transparent px-4 py-5 text-sm font-bold text-foreground placeholder:text-foreground/30 outline-none"
            />
            <div className="pr-3">
              <button className="flex items-center gap-2 rounded-xl bg-foreground/5 dark:bg-white/5 px-4 py-2.5 text-xs font-black uppercase tracking-widest text-foreground/60 transition-all hover:bg-primary hover:text-white">
                <SlidersHorizontal size={14} />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">
          <div className="h-px w-12 bg-foreground/10" />
          <span>Quick Filter</span>
        </div>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          onClick={() => {
            setActive(null);
            onCategory(null);
          }}
          className={`relative flex items-center gap-3 flex-shrink-0 rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest transition-all border ${
            active === null
              ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
              : "bg-card dark:bg-zinc-900 border-foreground/5 dark:border-white/5 text-foreground/40 hover:border-primary/20 hover:text-foreground"
          }`}
        >
          <LayoutGrid size={16} />
          <span>All Items</span>
          {active === null && (
            <motion.div
              layoutId="active-cat"
              className="absolute inset-0 rounded-2xl border-2 border-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
        {categories.map((c) => {
          const Icon = categoryIcons[c.key] || LayoutGrid;
          return (
            <button
              key={c.key}
              onClick={() => {
                setActive(c.key);
                onCategory(c.key);
              }}
              className={`relative flex items-center gap-3 flex-shrink-0 rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest transition-all border ${
                active === c.key
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-card dark:bg-zinc-900 border-foreground/5 dark:border-white/5 text-foreground/40 hover:border-primary/20 hover:text-foreground"
              }`}
            >
              <Icon size={16} />
              <span>{c.label}</span>
              {active === c.key && (
                <motion.div
                  layoutId="active-cat"
                  className="absolute inset-0 rounded-2xl border-2 border-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
