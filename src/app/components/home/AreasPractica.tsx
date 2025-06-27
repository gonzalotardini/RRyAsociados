"use client";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaBriefcase,
  FaCarCrash,
  FaShieldAlt,
  FaUsers,
  FaScroll,
  FaHardHat,
} from "react-icons/fa";

const areas = [
  {
    icon: FaBalanceScale,
    titulo: "Derecho Civil",
    descripcion:
      "Reclamos por daños, contratos, alquileres, desalojo y conflictos entre particulares.",
  },
  {
    icon: FaBriefcase,
    titulo: "Derecho Comercial",
    descripcion:
      "Asesoramiento a empresas, sociedades, cheques, concursos, quiebras y contratos comerciales.",
  },
  {
    icon: FaCarCrash,
    titulo: "Accidentes de Tránsito",
    descripcion:
      "Indemnizaciones por choques, lesiones o fallecimientos. Defensa y reclamos ante aseguradoras.",
  },
  {
    icon: FaShieldAlt,
    titulo: "Defensa del Consumidor",
    descripcion:
      "Reclamos por incumplimientos, estafas, servicios defectuosos o abusos de empresas y comercios.",
  },
  {
    icon: FaUsers,
    titulo: "Derecho de Familia",
    descripcion:
      "Divorcios, régimen de visitas, alimentos, tenencia de hijos y adopciones. Acompañamiento humano.",
  },
  {
    icon: FaScroll,
    titulo: "Sucesiones",
    descripcion:
      "Tramitación completa de herencias, testamentos y división de bienes. Rápido y claro.",
  },
  {
    icon: FaHardHat,
    titulo: "ART (Accidentes laborales)",
    descripcion:
      "Reclamos contra la ART por accidentes de trabajo o enfermedades laborales. Defensa integral.",
  },
];

export default function Servicios() {
    const topAreas = areas.slice(0, 4);
    const bottomAreas = areas.slice(4);
  
    return (
      <section id="areasPractica" className="mx-auto flex flex-col justify-center items-center text-center pt-10 pb-20 px-4 mb-25 scroll-mt-25">
        <h1 className="mt-20 mb-30">
          ÁREAS DE PRÁCTICA
        </h1>
  
        {/* Primer bloque: 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {topAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <Icon className="text-7xl text-gray-900" />
                <h3 className="text-2xl font-bold">{area.titulo}</h3>
                <p className="text-lg text-gray-800">{area.descripcion}</p>
              </motion.div>
            );
          })}
        </div>
  
        {/* Segundo bloque: 3 columnas centrado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16 max-w-5xl mx-auto justify-center">
          {bottomAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <Icon className="text-7xl text-gray-900" />
                <h3 className="text-2xl font-bold">{area.titulo}</h3>
                <p className="text-lg text-gray-800">{area.descripcion}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }
  
