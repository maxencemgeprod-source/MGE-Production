/* MGE Production — Site Complet */ 
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Camera, Film, Image, Menu } from "lucide-react";

const CTA = ({ children, href = "#" }) => (
  <a
    href={href}
    className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl font-semibold shadow-lg hover:translate-y-[-2px] transition-transform"
  >
    {children}
  </a>
);

export default function MGEProductionSite() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-rose-500 rounded-lg flex items-center justify-center shadow-xl">
              <span className="text-white text-4xl font-bold" style={{ fontFamily: 'DIN Condensed, sans-serif', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>MGE</span>
            </div>
            <div>
              <div className="text-3xl font-extrabold leading-none" style={{ fontFamily: 'DIN Condensed, sans-serif', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>MGE Production</div>
              <div className="text-xs text-gray-600 mt-1">Vidéo • Photo • Post-production</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Prestations</a>
            <a href="#portfolio" className="hover:text-indigo-600">Portfolio</a>
            <a href="#about" className="hover:text-indigo-600">À propos</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="mailto:MaxenceMGEProd@gmail.com" className="hidden md:inline-block text-sm text-gray-700 underline">MaxenceMGEProd@gmail.com</a>
            <button className="md:hidden p-2 rounded bg-gray-100"><Menu size={18} /></button>
            <CTA href="tel:+33775111873"><Phone size={18}/> 07 75 11 18 73</CTA>
          </div>
        </div>
      </header>

      <section id="home" className="bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-6xl font-extrabold tracking-tight" style={{ fontFamily: 'DIN Condensed, sans-serif', textShadow: '3px 3px 10px rgba(0,0,0,0.5)' }}>
              MGE Production
            </h1>

            <p className="mt-6 text-gray-700 max-w-xl">
              Freelance en production audiovisuelle : réalisation vidéo, shooting photo professionnel, montage, étalonnage et post-production complète.
            </p>

            <div className="mt-8 flex gap-4">
              <CTA href="#portfolio">Voir le portfolio</CTA>
            </div>
          </motion.div>

          <motion.div className="rounded-2xl overflow-hidden shadow-2xl bg-black" initial={{ scale: 0.97, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="w-full h-[420px] bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Prestations</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Voici ce que je propose :</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <ServiceCard title="Production vidéo" icon={<Film size={22} />} bullets={["Tournage multicaméra", "Clips, pubs, fiction", "Direction photo"]} />
          <ServiceCard title="Photographie" icon={<Camera size={22} />} bullets={["Portraits", "Événements", "Photos produits"]} />
          <ServiceCard title="Post-production" icon={<Image size={22} />} bullets={["Montage", "Étalonnage", "Mixage audio"]} />
        </div>
      </section>

      <section id="portfolio" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Portfolio</h2>
          <p className="text-gray-600 mt-2">Tu pourras bientôt m’envoyer tes photos à intégrer ici.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {portfolioSamples.map((item, i) => <PortfolioCard key={i} {...item} />)}
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">À propos</h2>
        <p className="text-gray-700 mt-6 max-w-3xl leading-relaxed">
          Je me présente, <strong>Maxence Grange-Estrade</strong>, et je retrace mon parcours dans l'audiovisuel. Passionné depuis toujours par l'image et le son, j'ai travaillé sur des projets allant de la fiction au plateau multicaméra, en passant par des clips musicaux et des captations professionnelles.
        </p>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="max-w-2xl space-y-4" action="mailto:MaxenceMGEProd@gmail.com" method="post" encType="multipart/form-data">
          <input className="w-full p-3 border rounded" type="text" name="nom" placeholder="Nom" required />
          <input className="w-full p-3 border rounded" type="text" name="prenom" placeholder="Prénom" required />
          <input className="w-full p-3 border rounded" type="tel" name="telephone" placeholder="Numéro de téléphone" required />
          <input className="w-full p-3 border rounded" type="text" name="objet" placeholder="Objet de la demande" required />
          <input className="w-full p-3 border rounded" type="file" name="fichier" />
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">Envoyer</button>
        </form>
      </section>

      <footer className="bg-black text-white py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg" style={{ fontFamily: 'DIN Condensed, sans-serif' }}>MGE Production</div>
          <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 text-sm text-gray-300">
            <a href="mailto:MaxenceMGEProd@gmail.com" className="underline">MaxenceMGEProd@gmail.com</a>
            <a href="tel:+33775111873" className="mt-1">07 75 11 18 73</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, icon, bullets }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="flex items-center gap-3 text-indigo-600 mb-3">
        {icon}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <ul className="text-gray-600 text-sm space-y-1">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>
    </div>
  );
}

function PortfolioCard({ title, image }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="p-4 text-sm font-medium text-gray-700">{title}</div>
    </div>
  );
}

const portfolioSamples = [
  { title: "Projet vidéo (exemple)", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
  { title: "Photographie (exemple)", image: "https://images.unsplash.com/photo-1504203700686-0f42508f06c5" },
  { title: "Tournage (exemple)", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32" }
];
