"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { id: 1, name: 'Zařízení pod naší správou', value: '2 500+' },
  { id: 2, name: 'Průměrná reakční doba', value: '15 min' },
  { id: 3, name: 'Problémů vyřešeno v den zadání', value: '95 %' },
  { id: 4, name: 'Spokojených firemních klientů', value: '12+' },
];

const testimonials = [
  {
    body: "Před lety nám interní IT člověk stačil, ale s rostoucími požadavky na kyberbezpečnost a zálohy to už nebylo udržitelné. Dnes je pro nás mnohem lepší zavolat technikovi z Veselé IT, který problém okamžitě vyřeší.",
    author: {
      name: 'Jan Novák',
      handle: 'Ředitel, TechManufacture s.r.o.',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "Oceňuji zejména proklientský přístup a flexibilitu. Nemusíme se starat o sledování IT trendů, protože Veselé IT s návrhy a zlepšeními přichází samo. Naše infrastruktura funguje bezpečně a optimálně.",
    author: {
      name: 'Petra Dvořáková',
      handle: 'Provozní manažerka, LogisTech',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "Infrastrukturu máme konečně v takové kondici, že se můžeme naplno věnovat rozvoji našeho byznysu místo nekonečného řešení nefunkčních tiskáren a výpadků sítě. Skvělá a transparentní spolupráce.",
    author: {
      name: 'Tomáš Svoboda',
      handle: 'CEO, E-commerce Plus',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
        <div className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-accent to-secondary xl:ml-0 xl:mr-[calc(50%-12rem)]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Stats Section */}
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
              Čísla mluví za vše
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 font-sans">
              Zakládáme si na transparentnosti, rychlosti a dlouhodobé spokojenosti našich klientů.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white/40 backdrop-blur-md p-8 hover:bg-white/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-2xl"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600 font-sans">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-primary font-heading mb-2">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Testimonials Section */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary font-sans uppercase tracking-wider">Reference</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
            Co o nás říkají naši klienti
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.author.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col justify-between rounded-3xl bg-white/80 backdrop-blur-md p-8 shadow-sm ring-1 ring-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div>
                <div className="flex gap-x-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans leading-relaxed">"{testimonial.body}"</p>
              </div>
              <div className="mt-8">
                <div>
                  <div className="font-semibold text-foreground font-heading">{testimonial.author.name}</div>
                  <div className="text-sm leading-6 text-gray-500 font-sans">{testimonial.author.handle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
