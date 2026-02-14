"use client";

import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black sm:text-6xl mb-6"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60"
          >
            Have a question about our menu, delivery, or catering? We're here to help you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Phone className="text-primary" />,
                  title: "Phone",
                  details: "+63 912 345 6789",
                  sub: "Mon-Sun 10am-10pm"
                },
                {
                  icon: <Mail className="text-primary" />,
                  title: "Email",
                  details: "hello@chickenkeeper.com",
                  sub: "Online support 24/7"
                },
                {
                  icon: <MapPin className="text-primary" />,
                  title: "Location",
                  details: "123 Flavor Street",
                  sub: "Food City, Metro Manila"
                },
                {
                  icon: <Clock className="text-primary" />,
                  title: "Hours",
                  details: "10:00 AM - 10:00 PM",
                  sub: "Open Every Day"
                }
              ].map((item, i) => (
                <div key={i} className="bg-card p-6 rounded-[2rem] border border-foreground/5 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-black mb-1">{item.title}</h3>
                  <p className="text-sm font-bold text-foreground/80">{item.details}</p>
                  <p className="text-xs text-foreground/40 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="relative h-80 w-full overflow-hidden rounded-[3rem] border border-foreground/5 shadow-2xl">
              <iframe
                title="Map"
                aria-label="Map"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.26932702779!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b8e0b01%3A0x7b0ef!2sFood%20Street!5e0!3m2!1sen!2sus!4v1610000000000"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card p-8 md:p-12 rounded-[3rem] border border-foreground/5 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-primary" size={32} />
              <h2 className="text-3xl font-black">Send a Message</h2>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! We'll get back to you soon.");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-4">Name</label>
                  <input required placeholder="Juan Dela Cruz" className="w-full rounded-2xl bg-background border border-foreground/5 px-6 py-4 text-sm font-bold outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-4">Email</label>
                  <input required type="email" placeholder="juan@example.com" className="w-full rounded-2xl bg-background border border-foreground/5 px-6 py-4 text-sm font-bold outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-4">Subject</label>
                <input required placeholder="Catering Inquiry" className="w-full rounded-2xl bg-background border border-foreground/5 px-6 py-4 text-sm font-bold outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-4">Message</label>
                <textarea required placeholder="How can we help you?" rows={5} className="w-full rounded-2xl bg-background border border-foreground/5 px-6 py-4 text-sm font-bold outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-5 text-white font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-charcoal/20 group">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
