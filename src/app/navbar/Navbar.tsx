"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c1d37] shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo a la izquierda */}
        <Link href="/">
          <div className="relative md:w-[300px] w-[200px] h-[80px]">
            <Image
              src="/images/logoBlanco.png"
              alt="RR & Asociados"
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>
        </Link>

        {/* Menú centrado - solo visible en desktop */}
        <ul className="hidden md:flex space-x-8 text-lg items-center text-white font-medium tracking-widest">
          {[
            { label: "INICIO", href: "/" },
            { label: "QUIÉNES SOMOS", href: "#quienesSomos" },
            { label: "EQUIPO", href: "#equipo" },
            { label: "ÁREAS DE PRÁCTICA", href: "#areasPractica" },
            { label: "CONTACTO", href: "#contacto" },
          ].map(({ label, href }, index) => (
            <li key={index} className="group relative cursor-pointer">
              <Link href={href} className="inline-block transition-transform hover:scale-105 hover:font-bold">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa solo visible en mobile */}
        <button
          className={`md:hidden text-2xl text-white z-50 "
          ${isOpen ? "relative top-[-20px]" : ""
            }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#0c1d37] shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <div className="p-6 flex flex-col space-y-6 text-white font-medium text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>INICIO</Link>
          <Link href="#quienesSomos" onClick={() => setIsOpen(false)}>QUIENES SOMOS</Link>
          <Link href="#equipo" onClick={() => setIsOpen(false)}>EQUIPO</Link>
          <Link href="#areasPractica" onClick={() => setIsOpen(false)}>ÁREAS DE PRÁCTICA</Link>
          <Link href="#contacto" onClick={() => setIsOpen(false)}>CONTACTO</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
