import React from "react";

export default function CoffeeShop() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#2e2c2c] font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">Bean & Brew</h1>
        <nav className="space-x-6 text-lg">
          <a href="#menu" className="hover:text-[#8b5e34]">Menu</a>
          <a href="#about" className="hover:text-[#8b5e34]">About</a>
          <a href="#contact" className="hover:text-[#8b5e34]">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-[80vh] bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-5xl font-bold drop-shadow-lg">Welcome to Bean & Brew</h2>
        <p className="mt-4 text-xl drop-shadow-md">Freshly brewed coffee, cozy vibes, and homemade pastries</p>
        <a href="#menu" className="mt-6 px-6 py-3 bg-[#8b5e34] rounded-2xl shadow-lg hover:bg-[#704a29] transition">See Our Menu</a>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-6 bg-[#fffdfb]">
        <h3 className="text-3xl font-bold text-center mb-12">Our Menu</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Espresso</h4>
            <p className="text-gray-600">Strong and bold, the heart of every great coffee.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Latte</h4>
            <p className="text-gray-600">Smooth espresso blended with steamed milk.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Croissant</h4>
            <p className="text-gray-600">Freshly baked daily, buttery and flaky perfection.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-[#fdf8f3] text-center">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At <span className="font-semibold">Bean & Brew</span>, we believe coffee is more than just a drink — it's a way to bring people together. We source the best beans, brew them with passion, and serve them with love in a cozy atmosphere.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-[#fffdfb] text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <p className="text-gray-700 mb-4">123 Main Street, Brussels</p>
        <p className="text-gray-700 mb-4">Email: hello@beanbrew.be</p>
        <p className="text-gray-700">Phone: +32 456 789 123</p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#2e2c2c] text-center text-white">
        <p>© {new Date().getFullYear()} Bean & Brew. All rights reserved.</p>
      </footer>
    </div>
  );
}
