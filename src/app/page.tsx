import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesBento from "@/components/ServicesBento";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <ServicesBento />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

