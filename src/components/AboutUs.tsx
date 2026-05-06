"use client";

import { motion } from "framer-motion";
import { Heart, Smile, MapPin } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary font-sans uppercase tracking-wider">
              O nás
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
              Děláme IT jinak. S úsměvem a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8b5cf6]">lidskostí</span>.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-sans">
              Jsme firma, která již dlouhá léta provozuje IT servis s láskou. Věříme, že technologie by měly lidem sloužit, nikoliv je frustrovat. Chceme, aby naši zákazníci koukali na své IT s úsměvem a ne s vráskami na čele.
            </p>
            
            <div className="mt-10 space-y-6 text-base leading-7 text-gray-600 font-sans">
              <p>
                Za každým serverem, sítí nebo počítačem vidíme konkrétní lidi a jejich každodenní práci. Naším posláním je být stabilním partnerem, o kterého se můžete vždy s důvěrou opřít. Vaše starosti s IT si bereme na svá bedra, abyste se vy mohli s klidem a radostí věnovat rozvoji vlastního podnikání.
              </p>
              <div className="flex gap-x-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex-none bg-primary/10 p-3 rounded-xl text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 font-heading">Kde působíme</h3>
                  <p className="text-gray-500">Srdcem našeho působení je Veselí nad Lužnicí, ale staráme se i o klienty v Praze a širokém okolí.</p>
                </div>
              </div>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3ddc84] hover:shadow-[0_0_25px_rgba(79,235,149,0.5)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary items-center gap-2"
                >
                  CHCI IT S ÚSMĚVEM
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-50 shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="Náš tým pracující s úsměvem"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Dekorativní prvky */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="bg-red-50 p-3 rounded-full text-red-500">
                <Heart className="w-6 h-6 fill-red-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">IT servis</p>
                <p className="font-bold text-gray-900 font-heading">S láskou</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 z-0 w-32 h-32 bg-gradient-to-br from-primary to-[#8b5cf6] rounded-full blur-2xl opacity-40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
