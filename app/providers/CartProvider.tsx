"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { MenuItem } from "@/app/data/menu";

export type CartLine = {
  id: string;
  qty: number;
  price: number;
  name: string;
  image: string;
  category: string;
};

type CartState = {
  lines: CartLine[];
};

type CartContextValue = {
  cart: CartState;
  add: (item: MenuItem, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const LS_KEY = "ck_cart_v1";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartState>(() => {
    if (typeof window === "undefined") return { lines: [] };
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return { lines: [] };
  });

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const add = (item: MenuItem, qty: number = 1) => {
    setCart((prev) => {
      const existing = prev.lines.find((l) => l.id === item.id);
      if (existing) {
        return {
          lines: prev.lines.map((l) =>
            l.id === item.id ? { ...l, qty: l.qty + qty } : l
          ),
        };
      }
      return {
        lines: [
          ...prev.lines,
          {
            id: item.id,
            qty,
            price: item.price,
            name: item.name,
            image: item.image,
            category: item.category,
          },
        ],
      };
    });
  };

  const remove = (id: string) => {
    setCart((prev) => ({ lines: prev.lines.filter((l) => l.id !== id) }));
  };

  const setQty = (id: string, qty: number) => {
    setCart((prev) => ({
      lines: prev.lines
        .map((l) => (l.id === id ? { ...l, qty } : l))
        .filter((l) => l.qty > 0),
    }));
  };

  const clear = () => setCart({ lines: [] });

  const count = useMemo(() => cart.lines.reduce((sum, l) => sum + l.qty, 0), [cart]);
  const subtotal = useMemo(
    () => cart.lines.reduce((sum, l) => sum + l.qty * l.price, 0),
    [cart]
  );

  const value: CartContextValue = {
    cart,
    add,
    remove,
    setQty,
    clear,
    count,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
};
