"use client";

import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { useCart } from "@/app/providers/CartProvider";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, ShoppingBag, MapPin, CreditCard, Lock, ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { formatPHP } from "@/app/lib/currency";
import Image from "next/image";

export default function CheckoutPage() {
  const { cart, subtotal, clear } = useCart();
  const [placing, setPlacing] = useState(false);
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const [orderComplete, setOrderComplete] = useState(false);

  const delivery = mode === "delivery" ? (subtotal > 1200 ? 0 : subtotal > 0 ? 50 : 0) : 0;
  const tax = subtotal * 0.12;
  const total = subtotal + delivery + tax;

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-12 md:p-24 rounded-[4rem] border border-foreground/5 shadow-2xl max-w-3xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle2 size={48} className="text-green-500" />
            </motion.div>
            <h1 className="text-5xl font-black mb-6 tracking-tight">Order Confirmed!</h1>
            <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
              Thank you for your order. We've received it and our chefs are already starting to prepare your legendary meal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Link
                href="/menu"
                className="rounded-2xl bg-primary px-8 py-5 font-black text-white transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 active:scale-95 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                Order More
              </Link>
              <Link
                href="/"
                className="rounded-2xl bg-card border border-foreground/10 px-8 py-5 font-black text-foreground transition-all hover:bg-foreground hover:text-background active:scale-95 flex items-center justify-center gap-2"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-6">
            <Link href="/menu" className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-card border border-foreground/5 shadow-sm hover:bg-primary hover:border-primary transition-all duration-300">
              <ArrowLeft size={24} className="group-hover:text-white transition-colors" />
            </Link>
            <div>
              <h1 className="text-5xl font-black tracking-tight mb-2">Checkout</h1>
              <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs">Complete your legendary order</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-card/50 backdrop-blur-md p-2 rounded-3xl border border-foreground/5">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary/10 text-primary">
              <div className="w-6 h-6 rounded-full bg-primary text-white text-[10px] font-black flex items-center justify-center">1</div>
              <span className="text-xs font-black uppercase tracking-wider">Details</span>
            </div>
            <ChevronRight size={16} className="text-foreground/20" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl text-foreground/20">
              <div className="w-6 h-6 rounded-full bg-foreground/5 text-[10px] font-black flex items-center justify-center">2</div>
              <span className="text-xs font-black uppercase tracking-wider">Payment</span>
            </div>
          </div>
        </div>

        {cart.lines.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32 glass rounded-[4rem] border border-foreground/5"
          >
            <div className="w-32 h-32 rounded-[2.5rem] bg-foreground/5 flex items-center justify-center mx-auto mb-8 rotate-12">
              <ShoppingBag size={48} className="text-foreground/20" />
            </div>
            <h2 className="text-3xl font-black mb-4">Your cart is empty</h2>
            <p className="text-foreground/40 font-medium mb-10 max-w-md mx-auto text-lg">Add some delicious chicken to your cart before checking out. We're waiting to serve you!</p>
            <Link href="/menu" className="inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 font-black text-white hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95">
              Browse Menu
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 space-y-10">
              {/* Order Mode */}
              <section className="glass p-8 rounded-[3rem] border border-foreground/5 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Truck size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">Delivery Method</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setMode("delivery")}
                    className={`group relative flex flex-col items-center gap-4 p-8 rounded-[2.5rem] border-2 transition-all duration-300 ${mode === "delivery" ? "border-primary bg-primary/5 shadow-lg shadow-primary/5" : "border-foreground/5 bg-background/50 hover:border-primary/20"}`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${mode === "delivery" ? "bg-primary text-white" : "bg-foreground/5 text-foreground/40 group-hover:bg-primary/10 group-hover:text-primary"}`}>
                      <Truck size={32} />
                    </div>
                    <div className="text-center">
                      <span className={`block font-black text-lg ${mode === "delivery" ? "text-primary" : "text-foreground"}`}>Delivery</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">To your door</span>
                    </div>
                    {mode === "delivery" && (
                      <motion.div layoutId="mode-indicator" className="absolute top-4 right-4 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </motion.div>
                    )}
                  </button>
                  <button
                    onClick={() => setMode("pickup")}
                    className={`group relative flex flex-col items-center gap-4 p-8 rounded-[2.5rem] border-2 transition-all duration-300 ${mode === "pickup" ? "border-primary bg-primary/5 shadow-lg shadow-primary/5" : "border-foreground/5 bg-background/50 hover:border-primary/20"}`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${mode === "pickup" ? "bg-primary text-white" : "bg-foreground/5 text-foreground/40 group-hover:bg-primary/10 group-hover:text-primary"}`}>
                      <ShoppingBag size={32} />
                    </div>
                    <div className="text-center">
                      <span className={`block font-black text-lg ${mode === "pickup" ? "text-primary" : "text-foreground"}`}>Pickup</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">From store</span>
                    </div>
                    {mode === "pickup" && (
                      <motion.div layoutId="mode-indicator" className="absolute top-4 right-4 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </motion.div>
                    )}
                  </button>
                </div>
              </section>

              {/* Form */}
              <form
                className="glass p-8 md:p-12 rounded-[3.5rem] border border-foreground/5 shadow-sm space-y-12"
                onSubmit={(e) => {
                  e.preventDefault();
                  setPlacing(true);
                  setTimeout(() => {
                    setPlacing(false);
                    setOrderComplete(true);
                    clear();
                  }, 2000);
                }}
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">Contact Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-2">Full Name</label>
                      <input required placeholder="Juan Dela Cruz" className="w-full rounded-2xl bg-foreground/5 border border-transparent px-8 py-5 text-sm font-bold outline-none focus:bg-background focus:border-primary/30 transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-2">Phone Number</label>
                      <input required placeholder="+63 912 345 6789" className="w-full rounded-2xl bg-foreground/5 border border-transparent px-8 py-5 text-sm font-bold outline-none focus:bg-background focus:border-primary/30 transition-all" />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-2">Email Address</label>
                      <input required type="email" placeholder="juan@example.com" className="w-full rounded-2xl bg-foreground/5 border border-transparent px-8 py-5 text-sm font-bold outline-none focus:bg-background focus:border-primary/30 transition-all" />
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {mode === "delivery" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Truck size={20} className="text-primary" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight">Delivery Address</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2 space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-2">Street Address</label>
                          <input required placeholder="123 Flavor Street" className="w-full rounded-2xl bg-foreground/5 border border-transparent px-8 py-5 text-sm font-bold outline-none focus:bg-background focus:border-primary/30 transition-all" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-2">City</label>
                          <input required placeholder="Food City" className="w-full rounded-2xl bg-foreground/5 border border-transparent px-8 py-5 text-sm font-bold outline-none focus:bg-background focus:border-primary/30 transition-all" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-2">State</label>
                            <input required placeholder="Metro Manila" className="w-full rounded-2xl bg-foreground/5 border border-transparent px-8 py-5 text-sm font-bold outline-none focus:bg-background focus:border-primary/30 transition-all" />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-2">Zip</label>
                            <input required placeholder="1000" className="w-full rounded-2xl bg-foreground/5 border border-transparent px-8 py-5 text-sm font-bold outline-none focus:bg-background focus:border-primary/30 transition-all" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <CreditCard size={20} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">Payment Method</h3>
                  </div>
                  <div className="group relative bg-background/50 p-8 rounded-[2.5rem] border-2 border-primary bg-primary/5 flex items-center justify-between transition-all shadow-lg shadow-primary/5">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
                        <CreditCard size={32} />
                      </div>
                      <div>
                        <p className="text-lg font-black">Cash on Delivery</p>
                        <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Pay when your food arrives</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center p-1.5">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-full h-full rounded-full bg-primary" 
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={placing}
                    className="w-full group relative inline-flex items-center justify-center gap-4 rounded-[2rem] bg-charcoal px-10 py-7 text-white font-black text-xl transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-60 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    {placing ? (
                      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Lock size={24} className="group-hover:scale-110 transition-transform" />
                        <span>Place Legendary Order</span>
                        <div className="ml-2 px-4 py-1.5 rounded-xl bg-white/10 text-sm font-black">
                          {formatPHP(total)}
                        </div>
                      </>
                    )}
                  </button>
                  <p className="text-center mt-6 text-xs font-bold text-foreground/30 uppercase tracking-widest flex items-center justify-center gap-2">
                    <Lock size={12} />
                    Secure encrypted checkout
                  </p>
                </div>
              </form>
            </div>

            {/* Summary */}
            <aside className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              <div className="glass p-8 rounded-[3.5rem] border border-foreground/5 shadow-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
                
                <h3 className="text-2xl font-black mb-8 tracking-tight flex items-center gap-3">
                  Order Summary
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-foreground/5 text-foreground/40">
                    {cart.lines.length} items
                  </span>
                </h3>
                
                <div className="space-y-6 max-h-[40vh] overflow-y-auto pr-2 no-scrollbar mb-10">
                  {cart.lines.map((line) => (
                    <div key={line.id} className="group flex gap-5 items-center">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-foreground/5">
                        <Image src={line.image} alt={line.name} fill className="object-cover transition-transform group-hover:scale-110" />
                        <div className="absolute top-1 right-1 bg-charcoal text-white text-[10px] font-black w-6 h-6 rounded-lg flex items-center justify-center shadow-lg">
                          {line.qty}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-black line-clamp-1 group-hover:text-primary transition-colors">{line.name}</h4>
                        <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">{formatPHP(line.price)} per unit</p>
                      </div>
                      <p className="text-base font-black">{formatPHP(line.qty * line.price)}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-8 border-t border-foreground/10">
                  <div className="flex justify-between text-sm font-bold text-foreground/60">
                    <span className="uppercase tracking-widest text-[10px]">Subtotal</span>
                    <span>{formatPHP(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-foreground/60">
                    <span className="uppercase tracking-widest text-[10px]">{mode === "delivery" ? "Delivery Fee" : "Pickup"}</span>
                    <span className={delivery === 0 ? "text-green-500" : ""}>{delivery === 0 ? "FREE" : formatPHP(delivery)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-foreground/60">
                    <span className="uppercase tracking-widest text-[10px]">Tax (12%)</span>
                    <span>{formatPHP(tax)}</span>
                  </div>
                  <div className="flex justify-between pt-6 border-t-2 border-dashed border-foreground/10">
                    <div>
                      <span className="block text-xs font-black uppercase tracking-[0.2em] text-foreground/30 mb-1">Total Amount</span>
                      <span className="text-4xl font-black text-primary tracking-tighter drop-shadow-sm">{formatPHP(total)}</span>
                    </div>
                    <div className="text-right flex flex-col justify-end">
                      <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Savings Applied</span>
                      <span className="text-sm font-bold text-foreground/40">₱{subtotal > 1200 ? "50.00" : "0.00"} off</span>
                    </div>
                  </div>
                </div>
              </div>

              {subtotal > 1200 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 p-6 rounded-[2rem] border border-green-500/20 flex gap-5 items-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20">
                    <CheckCircle2 className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-green-600 mb-1">Free Delivery Unlocked!</p>
                    <p className="text-xs font-bold text-green-600/70 leading-relaxed uppercase tracking-wider">
                      You're saving ₱50 on this order because it's over ₱1,200.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-accent/10 p-6 rounded-[2rem] border border-accent/20 flex gap-5 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Truck className="text-accent" size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-accent mb-1">Add ₱{1200 - subtotal} more for Free Delivery</p>
                    <p className="text-xs font-bold text-accent/70 leading-relaxed uppercase tracking-wider">
                      Current delivery fee is ₱50.
                    </p>
                  </div>
                </div>
              )}
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
