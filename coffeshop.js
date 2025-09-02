import React, { useState } from "react";

export default function CoffeeShop() {
  const translations = {
    en: {
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      welcome: "Welcome to Bean & Brew",
      tagline: "Freshly brewed coffee, cozy vibes, and homemade pastries",
      seeMenu: "See Our Menu",
      ourMenu: "Our Menu",
      espresso: "Strong and bold, the heart of every great coffee.",
      latte: "Smooth espresso blended with steamed milk.",
      croissant: "Freshly baked daily, buttery and flaky perfection.",
      aboutUs: "About Us",
      aboutText:
        "At Bean & Brew, we believe coffee is more than just a drink — it's a way to bring people together. We source the best beans, brew them with passion, and serve them with love in a cozy atmosphere.",
      contactUs: "Contact Us",
      address: "123 Main Street, Brussels",
      email: "Email: hello@beanbrew.be",
      phone: "Phone: +32 456 789 123",
    },
    nl: {
      home: "Home",
      menu: "Menu",
      about: "Over Ons",
      contact: "Contact",
      welcome: "Welkom bij Bean & Brew",
      tagline: "Vers gezette koffie, gezellige sfeer en huisgemaakte gebakjes",
      seeMenu: "Bekijk ons menu",
      ourMenu: "Ons Menu",
      espresso: "Sterk en krachtig, het hart van elke geweldige koffie.",
      latte: "Zachte espresso gemengd met gestoomde melk.",
      croissant: "Dagelijks vers gebakken, boterachtig en luchtig.",
      aboutUs: "Over Ons",
      aboutText:
        "Bij Bean & Brew geloven we dat koffie meer is dan alleen een drankje — het is een manier om mensen samen te brengen. We gebruiken de beste bonen, zetten ze met passie en serveren ze met liefde in een gezellige sfeer.",
      contactUs: "Contact",
      address: "Hoofdstraat 123, Brussel",
      email: "E-mail: hello@beanbrew.be",
      phone: "Telefoon: +32 456 789 123",
    },
    fr: {
      home: "Accueil",
      menu: "Menu",
      about: "À Propos",
      contact: "Contact",
      welcome: "Bienvenue chez Bean & Brew",
      tagline: "Café fraîchement préparé, ambiance chaleureuse et pâtisseries maison",
      seeMenu: "Voir notre menu",
      ourMenu: "Notre Menu",
      espresso: "Fort et audacieux, le cœur de chaque grand café.",
      latte: "Espresso doux mélangé avec du lait chaud.",
      croissant: "Fraîchement cuit chaque jour, beurré et feuilleté à la perfection.",
      aboutUs: "À Propos",
      aboutText:
        "Chez Bean & Brew, nous croyons que le café est plus qu'une boisson — c'est une façon de rassembler les gens. Nous sélectionnons les meilleurs grains, les préparons avec passion et les servons avec amour dans une ambiance chaleureuse.",
      contactUs: "Contact",
      address: "123 Rue Principale, Bruxelles",
      email: "Email : hello@beanbrew.be",
      phone: "Téléphone : +32 456 789 123",
    },
  };

  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#2e2c2c] font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">Bean & Brew</h1>
        <nav className="flex items-center space-x-6 text-lg">
          <a href="#menu" className="hover:text-[#8b5e34]">{t.menu}</a>
          <a href="#about" className="hover:text-[#8b5e34]">{t.about}</a>
          <a href="#contact" className="hover:text-[#8b5e34]">{t.contact}</a>
          <select
            className="ml-4 p-1 border rounded"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="nl">NL</option>
            <option value="fr">FR</option>
          </select>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-[80vh] bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-5xl font-bold drop-shadow-lg">{t.welcome}</h2>
        <p className="mt-4 text-xl drop-shadow-md">{t.tagline}</p>
        <a
          href="#menu"
          className="mt-6 px-6 py-3 bg-[#8b5e34] rounded-2xl shadow-lg hover:bg-[#704a29] transition"
        >
          {t.seeMenu}
        </a>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-6 bg-[#fffdfb]">
        <h3 className="text-3xl font-bold text-center mb-12">{t.ourMenu}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Espresso</h4>
            <p className="text-gray-600">{t.espresso}</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Latte</h4>
            <p className="text-gray-600">{t.latte}</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Croissant</h4>
            <p className="text-gray-600">{t.croissant}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-[#fdf8f3] text-center">
        <h3 className="text-3xl font-bold mb-6">{t.aboutUs}</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">{t.aboutText}</p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-[#fffdfb] text-center">
        <h3 className="text-3xl font-bold mb-6">{t.contactUs}</h3>
        <p className="text-gray-700 mb-4">{t.address}</p>
        <p className="text-gray-700 mb-4">{t.email}</p>
        <p className="text-gray-700">{t.phone}</p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#2e2c2c] text-center text-white">
        <p>© {new Date().getFullYear()} Bean & Brew. All rights reserved.</p>
      </footer>
    </div>
  );
}
