import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { menu } from "@/app/data/menu";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import DetailClient from "./DetailClient";

export function generateStaticParams() {
  return menu.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = menu.find((m) => m.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.name}`,
    description: item.description,
    openGraph: {
      images: [{ url: item.image }],
    },
  };
}

export default function FoodPage({ params }: { params: { slug: string } }) {
  const item = menu.find((m) => m.slug === params.slug);
  if (!item) return notFound();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-[3rem] shadow-2xl">
            <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 hover:scale-110" priority />
            
            <div className="absolute left-6 top-6 flex flex-col gap-3">
              {item.bestSeller && (
                <span className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-black uppercase tracking-wider text-charcoal shadow-xl">
                  <Star size={14} fill="currentColor" />
                  Best Seller
                </span>
              )}
              {item.promotion && (
                <span className="rounded-full bg-primary px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-xl">
                  {item.promotion}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <DetailClient item={item} />
          </div>
        </div>

        {/* Recommended Items Section could go here */}
      </main>
      <Footer />
    </div>
  );
}

import { Star } from "lucide-react";
