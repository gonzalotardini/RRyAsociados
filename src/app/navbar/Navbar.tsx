"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#0c1d37] fixed top-0 left-0 w-full z-50 text-white">
      <div className="container mx-auto px-4 h-15 md:h-24 flex items-center md:justify-center justify-end">
        {/* <h1 className="text-2xl font-bold">RR & Asociados</h1> */}

        {/* Botón hamburguesa (solo en mobile) */}
        <button
          className="md:hidden text-2xl text-right px-2 py-2 border border-gray-400 rounded"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:flex uppercase space-x-6 font-semibold tracking-wide text-lg">
          <Link href="#inicio">Inicio</Link>
          <Link href="#areas">Áreas de Práctica</Link>
          <Link href="#quienes-somos">Quiénes Somos</Link>
          <Link href="#equipo">Equipo</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden bg-[#0c1d37] w-full flex flex-col items-center space-y-4 pb-6 text-base font-medium shadow-md uppercase"
        >
          <Link href="#inicio" onClick={toggleMenu}>Inicio</Link>
          <Link href="#areas" onClick={toggleMenu}>Áreas de Práctica</Link>
          <Link href="#quienes-somos" onClick={toggleMenu}>Quiénes Somos</Link>
          <Link href="#equipo" onClick={toggleMenu}>Equipo</Link>
          <Link href="#contacto" onClick={toggleMenu}>Contacto</Link>
        </motion.nav>
      )}
    </header>
  );
}
