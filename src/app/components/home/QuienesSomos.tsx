"use client"
import { motion } from "framer-motion";

type Socio = {
    nombre: string;
    rol: string;
    descripcion: string;
    imagen: string;
};
const socios: Socio[] = [
    {
      nombre: "Dra. Laura Fernández",
      rol: "Especialista en Derecho de Familia",
      descripcion: "Cuenta con más de 15 años de experiencia asesorando en casos de divorcios, alimentos y adopciones.",
      imagen: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&h=600",
    },
    {
      nombre: "Dr. Martín Pérez",
      rol: "Especialista en Derecho Laboral y ART",
      descripcion: "Representa a trabajadores en reclamos laborales y demandas contra ART con un enfoque humano y estratégico.",
      imagen: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&h=600",
    },
    {
      nombre: "Dr. Diego Ramírez",
      rol: "Especialista en Derecho Civil y Comercial",
      descripcion: "Brinda soluciones legales a particulares y empresas. Experto en contratos, sucesiones y sociedades.",
      imagen: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=600",
    },
  ];

export default function QuienesSomos() {
    return (
        <section className="bg-white">
            <div className="max-w-[90%] mx-auto py-10 px-4 bg-light text-center">
                <h2 className="md:text-5xl text-3xl font-bold text-gray-800 md:my-25 mb-15">
                    QUIÉNES SOMOS
                </h2>

                <p className="text-gray-700 text-xl text-base leading-relaxed mb-20">
                    Con más de 20 años de trayectoria, RR & Asociados nació con la firme convicción de que el Derecho debe estar al servicio de las personas.
                    A lo largo de estas dos décadas, hemos acompañado a cientos de clientes en momentos clave de sus vidas, ofreciendo un enfoque humano, responsable y estratégico.
                    Nuestro equipo de profesionales combina experiencia, actualización constante y compromiso para brindar soluciones legales claras, efectivas y personalizadas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {socios.map((socio, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#0c1d37] rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.12)]"
                        >
                            <img
                                src={socio.imagen}
                                alt={socio.nombre}
                                className="w-full h-72 object-cover"
                            />
                            <div className="bg-[#0c1d37] text-white text-center px-4 py-6">
                                <h3 className="text-2xl tex-white font-semibold mb-3">{socio.nombre}</h3>
                                <p className="text-sm text-white italic uppercase tracking-widest mb-1">{socio.rol}</p>
                                <p className="text-sm mt-2 text-white">{socio.descripcion}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
