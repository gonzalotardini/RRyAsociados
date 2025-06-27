"use client"
import { motion } from "framer-motion";
import Image from "next/image";

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
        imagen: "/images/socios/socio1.webp",
    },
    {
        nombre: "Dr. Martín Pérez",
        rol: "Especialista en Derecho Laboral y ART",
        descripcion: "Representa a trabajadores en reclamos laborales y demandas contra ART con un enfoque humano y estratégico.",
        imagen: "/images/socios/socio2.webp",
    },
    {
        nombre: "Dr. Diego Ramírez",
        rol: "Especialista en Derecho Civil y Comercial",
        descripcion: "Brinda soluciones legales a particulares y empresas. Experto en contratos, sucesiones y sociedades.",
        imagen: "/images/socios/socio3.webp",
    },
];

export default function QuienesSomos() {
    return (
        <section className="bg-white scroll-mt-25" id="quienesSomos">
            <div className="max-w-[90%] mx-auto sm:pt-10 pt-25 bg-light text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <h1 className="md:text-5xl text-3xl font-bold text-gray-800 md:my-25 mb-15">
                        QUIÉNES SOMOS
                    </h1>

                    <p className="text-gray-700 text-xl text-base leading-relaxed mb-20">
                        Con más de 20 años de trayectoria, RR & Asociados nació con la firme convicción de que el Derecho debe estar al servicio de las personas.
                        A lo largo de estas dos décadas, hemos acompañado a cientos de clientes en momentos clave de sus vidas, ofreciendo un enfoque humano, responsable y estratégico.
                        Nuestro equipo de profesionales combina experiencia, actualización constante y compromiso para brindar soluciones legales claras, efectivas y personalizadas.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-15">SOCIOS</h2>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
                    {socios.map((socio, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#0c1d37] rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.12)]"
                        >
                            <div className="relative w-full h-72">
                                <Image
                                    src={socio.imagen}
                                    alt={socio.nombre}
                                    fill
                                    className="object-cover rounded-t-lg"
                                    sizes="(min-width: 768px) 25vw, 100vw"
                                />
                            </div>

                            <div className="bg-[#0c1d37] text-white text-center px-4 py-6">
                                <h3 className="text-2xl header-dark font-semibold mb-3">{socio.nombre}</h3>
                                <p className="text-sm text-white italic uppercase tracking-widest mb-1">{socio.rol}</p>
                                <p className="text-sm mt-2 text-white">{socio.descripcion}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>


            <div className="bg-[#0c1d37] sm:min-h-[40vh] py-16 text-white flex items-center">
                <div className="max-w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center sm:divide-x divide-white/20 sm:divide-y-0 divide-y">
                    {[
                        { number: 1000, label: 'Clientes atendidos', suffix: '+' },
                        { number: 15, label: 'Años de experiencia', suffix: '+' },
                        { number: 500, label: 'Juicios ganados', suffix: '+' },
                        { number: 95, label: 'Casos exitosos', suffix: '%' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div key={index} className="px-4 py-6 flex items-center">
                                <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 header-dark flex mr-10 mx-auto">
                                    {/* <AnimatedCounter targetNumber={item.number} /> */}
                                    {item.number}
                                    {item.suffix}
                                </h1>
                                <p className="uppercase text-sm sm:text-base text-gray-300 tracking-wider flex mx-auto">{item.label}</p>
                            </div>
                        </motion.div>

                    ))}
                </div>
            </div>

        </section>
    );
}
