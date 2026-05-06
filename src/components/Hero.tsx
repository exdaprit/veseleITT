"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-24 sm:pt-36 lg:py-32 flex items-center min-h-[90vh]">

      {/* Subtle Background Image */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
          alt="Abstract IT Background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* TEXT CONTENT (Left) */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-gray-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8b5cf6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b5cf6]"></span>
                </span>
                IT partner pro moderní firmy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl xl:text-7xl"
            >
              Veselé IT, správa z které budete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8b5cf6]">mít radost</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 font-sans"
            >
              Spravujeme IT ve Veselí, Praze a okolí a tvoříme úsměv na tváři. Zajišťujeme kompletní <strong>IT outsourcing</strong>, spolehlivou <strong>správu sítí a serverů</strong> i pokročilou <strong>kybernetickou bezpečnost</strong>. Profesionální IT podpora pro firmy, která běží na pozadí, abyste se vy mohli plně věnovat svému byznysu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-x-6"
            >
              <a
                href="#contact-form"
                className="group relative rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3ddc84] hover:shadow-[0_0_25px_rgba(79,235,149,0.5)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Zjistit cenu služeb <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </a>
              <a href="#services" className="group text-sm font-semibold leading-6 text-foreground hover:text-secondary transition-colors duration-300 flex items-center gap-1">
                Co nabízíme <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>

          {/* VISUAL COLLAGE (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-20 lg:mt-0 w-full max-w-[500px] mx-auto aspect-square"
          >
            {/* Background glowing blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-[#8b5cf6]/20 blur-3xl rounded-full -z-10"></div>

            {/* Main Wave/Blob Image */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[75%] h-[75%] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-2xl border-4 border-white bg-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" 
                alt="IT Support Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </motion.div>

            {/* Floating Purple Triangle */}
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 w-[50%] h-[50%] overflow-hidden shadow-xl"
              style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop" 
                alt="Cybersecurity Code" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#8b5cf6]/60 mix-blend-multiply"></div>
            </motion.div>

            {/* Small decorative circle */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-primary shadow-lg border-2 border-white"
            ></motion.div>

            {/* Graphic lines/waves */}
            <div className="absolute -bottom-4 right-10 w-24 h-24 text-[#8b5cf6] opacity-40 -z-10">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,60 Q55,20 100,60 T190,60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                <path d="M10,100 Q55,60 100,100 T190,100" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                <path d="M10,140 Q55,100 100,140 T190,140" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
