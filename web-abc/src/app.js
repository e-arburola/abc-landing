import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Emisoras', href: '#emisoras' },
    { name: 'Noticias', href: '#noticias' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-geist">
      {/* Video Background */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />

      {/* Sutil capa de contraste para asegurar legibilidad sobre el video */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Navbar */}
      <header className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <div className="flex items-center gap-10">
          <a
            href="#inicio"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            ABC.cr
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-block rounded-lg bg-white px-5 py-2 text-sm font-medium text-black hover:scale-105 transition-transform"
          >
            Escuchar en Vivo
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white md:hidden active:scale-90 transition-transform"
        >
          <Menu
            size={24}
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen
                ? 'rotate-90 opacity-0 scale-50'
                : 'rotate-0 opacity-100 scale-100'
            }`}
          />
          <X
            size={24}
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen
                ? 'rotate-0 opacity-100 scale-100'
                : '-rotate-90 opacity-0 scale-50'
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 top-0 z-20 bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen
            ? 'h-screen opacity-100'
            : 'h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center px-8 transition-all duration-500 delay-100 ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div>
            <a
              href="#emisoras"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 text-base font-medium text-black hover:scale-105 transition-transform"
            >
              Escuchar en Vivo
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        {/* Top Section */}
        <div className="max-w-3xl">
          <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-white/90 animate-[fadeSlideUp_0.8s_ease_0.2s_both]">
            Grupo ABC • Comunicación y Entretenimiento
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white animate-[fadeSlideUp_0.8s_ease_0.4s_both]">
            Conectando a Costa Rica,
            <br />
            a través de la radio,
            <br />
            música y actualidad.
          </h1>
        </div>

        {/* Bottom Section */}
        <div>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/60 max-w-sm sm:max-w-lg mb-5 sm:mb-6 animate-[fadeSlideUp_0.8s_ease_0.7s_both]">
            Líderes en radiodifusión y contenido digital. Sintoniza nuestras
            emisoras en vivo, entérate de las últimas noticias y disfruta de la
            mejor programación nacional.
          </p>

          <a
            href="#emisoras"
            className="rounded-lg bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-black hover:scale-105 transition-transform inline-flex items-center gap-2 animate-[fadeSlideUp_0.8s_ease_0.9s_both]"
          >
            Explorar Emisoras
            <ArrowRight size={16} />
          </a>
        </div>
      </main>
    </div>
  );
}