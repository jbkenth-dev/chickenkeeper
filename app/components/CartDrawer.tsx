"use client";

import { useCart } from "@/app/providers/CartProvider";
import { useUI } from "@/app/providers/UIProvider";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingCart, Lock, MapPin, CreditCard, Wallet, Trash2, ArrowRight, Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { formatPHP } from "@/app/lib/currency";

export function CartDrawer() {
  const { cart, subtotal, setQty, remove } = useCart();
  const { isCartOpen, closeCart } = useUI();
  const isEmpty = cart.lines.length === 0;
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const [payment, setPayment] = useState<"cod" | "online">("cod");

  const delivery = subtotal > 1200 ? 0 : subtotal > 0 ? 50 : 0;
  const tax = subtotal * 0.12;
  const total = subtotal + delivery + tax;

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isCartOpen, closeCart]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[90] bg-charcoal/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            id="cart-drawer"
            className="fixed right-0 top-0 z-[100] h-screen w-full overflow-hidden bg-background shadow-2xl md:w-[480px] md:rounded-l-[3rem]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-8">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <ShoppingCart size={24} className="text-primary" />
                    {cart.lines.length > 0 && (
                      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-charcoal text-[10px] font-black text-white">
                        {cart.lines.length}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-black">Your Cart</h2>
                </div>
                <button
                  aria-label="Close cart"
                  onClick={closeCart}
                  className="group rounded-full bg-card p-3 text-foreground transition-all hover:bg-charcoal hover:text-white"
                  ref={closeRef}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-8">
                {isEmpty ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-6 rounded-full bg-primary/5 p-10">
                      <ShoppingCart size={64} className="text-primary/20" />
                    </div>
                    <h3 className="text-xl font-black mb-2">Your cart is empty</h3>
                    <p className="text-foreground/60 mb-8 max-w-[240px]">
                      Looks like you haven't added anything to your cart yet.
                    </p>
                    <button
                      onClick={closeCart}
                      className="rounded-full bg-charcoal px-8 py-4 font-black text-white transition-transform hover:scale-105 active:scale-95"
                    >
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6 pb-8">
                    {/* Delivery Info */}
                    <div className="rounded-3xl bg-accent/10 p-4 border border-accent/20">
                      <div className="flex items-center gap-3">
                        <MapPin className="text-accent" size={20} />
                        <div>
                          <p className="text-xs font-black text-accent uppercase tracking-wider">Delivery Address</p>
                          <p className="text-sm font-bold">Food City, Metro Manila</p>
                        </div>
                      </div>
                    </div>

                    {/* Cart Items */}
                    <div className="space-y-4">
                      {cart.lines.map((line) => (
                        <motion.div
                          layout
                          key={line.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex gap-4 rounded-3xl bg-card p-4 shadow-sm border border-foreground/5 group"
                        >
                          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                            <Image
                              src={line.image}
                              alt={line.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex justify-between gap-2">
                              <h4 className="text-sm font-black line-clamp-1">{line.name}</h4>
                              <button
                                onClick={() => remove(line.id)}
                                className="text-foreground/20 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="font-black text-primary text-sm">{formatPHP(line.price)}</p>
                              <div className="flex items-center gap-3 bg-background rounded-full p-1 border border-foreground/5">
                                <button
                                  onClick={() => setQty(line.id, Math.max(0, line.qty - 1))}
                                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="w-4 text-center font-bold text-xs">{line.qty}</span>
                                <button
                                  onClick={() => setQty(line.id, line.qty + 1)}
                                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              {!isEmpty && (
                <div className="p-8 bg-card border-t border-foreground/5 rounded-t-[3rem]">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-foreground/60">
                      <span>Subtotal</span>
                      <span className="font-bold">{formatPHP(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-foreground/60">
                      <span>Delivery Fee</span>
                      <span className="font-bold">{delivery === 0 ? "FREE" : formatPHP(delivery)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-foreground/60">
                      <span>Tax (12%)</span>
                      <span className="font-bold">{formatPHP(tax)}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-foreground/5">
                      <span className="text-lg font-black">Total</span>
                      <span className="text-2xl font-black text-primary">{formatPHP(total)}</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-5 text-white font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-charcoal/20 group">
                    Checkout Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-6 text-xs font-bold text-foreground/40">
                    <Lock size={12} />
                    SECURE CHECKOUT POWERED BY STRIPE
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
