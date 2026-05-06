"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSubmitted(true);
    } else {
      alert(result.error);
    }
  };

  return (
    <section id="contact-form" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary font-sans uppercase tracking-wider">Ozvěte se nám</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
            Začněme řešit vaše IT chytře
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-sans">
            Vyplňte krátký formulář a my se vám obratem ozveme s návrhem spolupráce. Získáte osobního partnera pro své IT.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Levý sloupec: Profil a Kontakt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-sm ring-1 ring-gray-200"
          >
            <div className="flex flex-col items-center sm:flex-row gap-6 mb-8 pb-8 border-b border-gray-200">
              <div className="w-32 h-32 rounded-full shadow-md ring-4 ring-white bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl font-heading font-black">
                DP
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-foreground font-heading">David Prokeš</h3>
                <p className="text-primary font-medium mt-1">Váš osobní IT konzultant</p>
                <p className="text-sm text-gray-500 mt-2">IČO: 22491554</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-sans">Zavolejte nám</p>
                  <p className="font-semibold text-foreground">+420 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-sans">Napište nám</p>
                  <p className="font-semibold text-foreground">info@veseleit.cz</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-sans">Sídlo podnikání</p>
                  <p className="font-semibold text-foreground">Zlukovská 900, 391 81 Veselí n. L.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pravý sloupec: Formulář */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-sm ring-1 ring-gray-200"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-heading mb-4">Zpráva odeslána!</h3>
                <p className="text-gray-600 font-sans mb-8">
                  Děkuji za zprávu. Co nejdříve se vám ozvu na zadané kontaktní údaje.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary hover:text-[#3ddc84] font-semibold transition-colors"
                >
                  Poslat další zprávu
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">
                    Jméno a příjmení
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full rounded-xl border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                    E-mail
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-xl border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-foreground">
                    Telefon
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block w-full rounded-xl border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                    Jak vám mohu pomoci?
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="block w-full rounded-xl border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-shadow"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary px-8 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#3ddc84] hover:shadow-md transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Odeslat nezávaznou poptávku <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
