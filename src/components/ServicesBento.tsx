"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const services = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
    title: "IT podpora 24/7/365",
    description: "Reakce do 2 hodin, neustálý monitoring a předcházení problémům. Váš IT pomocník je vždy po ruce.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    title: "Maximální bezpečnost",
    description: "Ochráníme vaše data před kyberútoky moderními technologiemi.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    title: "Cloud a Zálohování",
    description: "Bezpečné uložení a okamžitá obnova vašich citlivých firemních dat.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    title: "Správa sítí a serverů",
    description: "Zajistíme, aby vaše firemní infrastruktura fungovala rychle a bez výpadků.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    title: "Konzultace a IT audit",
    description: "Optimalizujeme náklady a připravíme strategii rozvoje vašeho IT.",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function ServicesBento() {
  return (
    <section id="services" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary font-sans uppercase tracking-wider">Naše Služby</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
            Kompletní správa IT bez starostí
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-sans">
            Nabízíme vše, co moderní firma potřebuje k bezpečnému a efektivnímu chodu. Přizpůsobíme se vašim potřebám.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[250px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={clsx(
                "rounded-3xl shadow-sm flex flex-col justify-end overflow-hidden relative group transition-all duration-300 hover:shadow-xl ring-1 ring-gray-900/10",
                service.className
              )}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-full mt-auto">
                <h3 className="text-xl font-bold text-white font-heading mb-2 drop-shadow-md">{service.title}</h3>
                <p className="text-gray-200 font-sans text-sm leading-relaxed drop-shadow-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
