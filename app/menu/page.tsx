"use client";

import { useMemo, useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { FilterBar } from "@/app/components/FilterBar";
import { MenuCard } from "@/app/components/MenuCard";
import { CardSkeleton } from "@/app/components/Skeleton";
import { categories, menu } from "@/app/data/menu";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const filteredItems = useMemo(() => {
    let list = menu;
    if (cat) list = list.filter((m) => m.category === cat);
    if (q) {
      const s = q.toLowerCase();
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(s) ||
          m.description.toLowerCase().includes(s) ||
          m.ingredients.join(" ").toLowerCase().includes(s)
      );
    }
    return list;
  }, [q, cat]);

  const groupedItems = useMemo(() => {
    if (cat || q) return null;
    return categories.map((category) => ({
      ...category,
      items: menu.filter((item) => item.category === category.key),
    }));
  }, [cat, q]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-[20]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 sticky top-24 z-[40]"
        >
          <div className="glass rounded-[3rem] p-4 sm:p-6 shadow-2xl shadow-primary/5 border border-foreground/5">
            <FilterBar
              onSearch={(s) => {
                setLoading(true);
                setQ(s);
                setTimeout(() => setLoading(false), 400);
              }}
              onCategory={(c) => {
                setLoading(true);
                setCat(c);
                setTimeout(() => setLoading(false), 400);
              }}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {loading ? (
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <CardSkeleton />
                </motion.div>
              ))}
            </div>
          ) : groupedItems ? (
            <div className="space-y-24">
              {groupedItems.map((group, groupIdx) => (
                <section key={group.key} className="relative">
                  <div className="mb-12 flex items-end justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-primary">
                        <div className="h-px w-8 bg-primary/30" />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">{group.key}</span>
                      </div>
                      <h2 className="text-4xl font-black text-foreground tracking-tight">{group.label}</h2>
                    </div>
                    <span className="text-sm font-bold text-foreground/20">{group.items.length} items</span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {group.items.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <MenuCard item={item} />
                      </motion.div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <MenuCard item={item} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full py-32 text-center"
            >
              <div className="mx-auto mb-8 h-32 w-32 rounded-[2.5rem] bg-foreground/5 flex items-center justify-center rotate-12 transition-transform hover:rotate-0">
                <Search size={48} className="text-foreground/10" />
              </div>
              <h3 className="text-3xl font-black">No matches found</h3>
              <p className="text-foreground/40 mt-4 text-lg font-medium">
                We couldn't find anything matching "{q || cat}". <br />
                Try a different search or browse all categories.
              </p>
              <button
                onClick={() => {
                  setQ("");
                  setCat(null);
                }}
                className="mt-10 rounded-2xl bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

// Add Search icon import to the page
import { Search } from "lucide-react";
