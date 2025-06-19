"use client"
import { motion } from "framer-motion";

type Miembro = {
    nombre: string;
    cargo: string;
    imagen: string;
};

const equipo: Miembro[] = [
    {
        nombre: "Dra. Mariana López",
        cargo: "Abogada especialista en Familia",
        imagen: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=500",
    },
    {
        nombre: "Dr. Nicolás Gómez",
        cargo: "Abogado laboralista",
        imagen: "https://images.pexels.com/photos/5422796/pexels-photo-5422796.jpeg?auto=compress&cs=tinysrgb&h=500",
    },
    {
        nombre: "Lucía Sosa",
        cargo: "Secretaria administrativa",
        imagen: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=500",
    },
];

export default function NuestroEquipo() {
    return (
        <section className="mb-20 mt-30 justify-center text-center">
            <div className="max-w-[95%] mx-auto">
                <h2 className="md:text-5xl text-3xl font-bold text-gray-800 mb-20">NUESTRO EQUIPO</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {equipo.map((miembro, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-white w-[80%] md:w-[100%] mx-auto rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center"
                        >
                            <img
                                src={miembro.imagen}
                                alt={miembro.nombre}
                                className="w-24 h-24 rounded-full object-cover mb-4"
                            />
                            <h3 className="text-lg font-bold text-primary">{miembro.nombre}</h3>
                            <p className="text-sm text-gray-700 italic">{miembro.cargo}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative max-w-5xl mx-auto mt-16 px-4"
                >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#0c1d37] group">
                        <img
                            src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&h=600"
                            alt="Equipo"
                            className="w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>
                        <div className="absolute bottom-4 left-4 bg-white/80 text-[#0c1d37] px-4 py-2 rounded font-medium shadow-md text-sm">
                            “Comprometidos con vos, todos los días”
                        </div>
                    </div>
                    <p className="text-center mt-6 text-gray-600 text-sm italic">
                        Nuestro equipo humano, el corazón de RR & Asociados
                    </p>
                </motion.div>


            </div>

        </section>
    );
}
