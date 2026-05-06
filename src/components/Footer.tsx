"use client";

import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#2e1065] mt-16 sm:mt-24 border-t-0 overflow-visible" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Patička a kontakty
      </h2>
      
      {/* Wave shape divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[80px]">
          <path d="M0,120 V46.29 c47.79,22.2, 103.59,32.17, 158,28 c70.36,-5.37, 136.33,-33.31, 206.8,-37.5 C438.64,32.43, 512.34,53.67, 583,72.05 c69.27,18, 138.3,24.88, 209.4,13.08 c36.15,-6, 69.85,-17.84, 104.45,-29.34 C989.49,25, 1113,-14.29, 1200,52.47 V120 H0 Z" className="fill-[#2e1065]"></path>
        </svg>
      </div>

      {/* Background Image pro patičku */}
      <div className="absolute inset-0 -z-10 opacity-15 pointer-events-none mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
          alt="IT Servers Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065] to-transparent"></div>
      </div>
      
      {/* Contact CTA */}
      <div className="py-16 sm:py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
              Nečekejte, až se něco pokazí
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300 font-sans">
              Získejte spolehlivou IT správu bez starostí ještě dnes. Ozvěte se nám pro nezávaznou konzultaci nebo cenovou nabídku.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:info@veseleit.cz"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3ddc84] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Nezávazná poptávka
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 relative z-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-primary text-white p-1.5 rounded-lg font-heading font-black text-sm flex items-center justify-center w-8 h-8">
                V
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">Veselé <span className="text-primary">IT</span></span>
            </a>
            <p className="text-sm leading-6 text-slate-400 font-sans max-w-xs">
              Váš IT partner pro bezproblémový chod firmy. Spolehlivě, bezpečně a s úsměvem.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white font-sans uppercase tracking-wider">Služby</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-primary transition-colors">IT správa</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-primary transition-colors">IT bezpečnost</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-primary transition-colors">Cloudová řešení</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-primary transition-colors">Zálohování</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white font-sans uppercase tracking-wider">Společnost</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-primary transition-colors">O nás</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-primary transition-colors">Reference</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-primary transition-colors">Kariéra</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-primary transition-colors">Kontakt</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white font-sans uppercase tracking-wider">Kontakt</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center gap-3 text-sm leading-6 text-slate-400">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:info@veseleit.cz" className="hover:text-primary transition-colors">info@veseleit.cz</a>
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-slate-400">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <span>Zlukovská 900<br />391 81 Veselí nad Lužnicí<br />Česká republika</span>
                  </li>
                  <li className="pt-4 mt-4 border-t border-slate-800 text-sm leading-6 text-slate-400">
                    <strong className="text-white">David Prokeš</strong><br />
                    IČO: 22491554<br />
                    Fyzická osoba podnikající dle živnostenského zákona
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs leading-5 text-slate-500">&copy; {new Date().getFullYear()} Veselé IT. Všechna práva vyhrazena.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-xs leading-5 text-slate-500 hover:text-white transition-colors">Ochrana osobních údajů</a>
            <a href="#" className="text-xs leading-5 text-slate-500 hover:text-white transition-colors">Podmínky použití</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
