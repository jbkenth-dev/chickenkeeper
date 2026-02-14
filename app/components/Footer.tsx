import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-24 text-white border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white p-1.5 transition-all duration-500 group-hover:rounded-xl group-hover:rotate-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src="/logo.jpg"
                    alt="Chickenkeeper"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-black tracking-tight text-white leading-none">
                  CHICKENKEEPER
                </h3>
                <span className="mt-1 text-[9px] font-black tracking-[0.3em] text-primary uppercase">
                  UNLIMITED RICE
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-base leading-relaxed font-medium max-w-sm">
              Crafting the gold standard of poultry. We combine traditional farm values with modern culinary excellence to bring you the finest chicken experience.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 text-white/70 transition-all hover:bg-primary hover:text-white hover:-translate-y-1 shadow-sm border border-white/5"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-8 text-xs font-black uppercase tracking-[0.2em] text-primary">Explore</h4>
              <ul className="space-y-4">
                {["Our Menu", "The Story", "Locations", "Gift Cards"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-zinc-400 transition-all hover:text-white hover:translate-x-1 flex items-center gap-2 font-bold text-sm group">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/10 transition-all group-hover:bg-primary group-hover:scale-125" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-8 text-xs font-black uppercase tracking-[0.2em] text-primary">Support</h4>
              <ul className="space-y-4">
                {["Contact", "Delivery", "Terms", "Privacy"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-zinc-400 transition-all hover:text-white hover:translate-x-1 flex items-center gap-2 font-bold text-sm group">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/10 transition-all group-hover:bg-primary group-hover:scale-125" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-primary">Join the Club</h4>
              <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                Get exclusive access to seasonal drops and special events.
              </p>
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white placeholder:text-zinc-600 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all shadow-inner"
              />
              <button className="absolute right-2 top-2 rounded-xl bg-primary px-6 py-2.5 text-xs font-black text-white transition-all hover:bg-primary-dark hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] active:scale-95">
                Join
              </button>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
              <Phone size={18} className="text-primary/60" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Order by Phone</p>
                <p className="text-sm font-black text-white">+63 (2) 8888-8888</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            &copy; {new Date().getFullYear()} Chickenkeeper. Crafted for Excellence.
          </p>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">System Online</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
