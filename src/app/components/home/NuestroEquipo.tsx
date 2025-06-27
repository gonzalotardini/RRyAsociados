"use client"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

type Miembro = {
    nombre: string;
    rol: string,
    imagen: string;
};

const equipo: Miembro[] = [
    {
        nombre: "Dr. Diego Ramírez",
        rol: "Abogada",
        imagen: "/images/equipo/equipo1.webp",
    },
    {
        nombre: "Dr. Nicolás Gómez",
        rol: "Abogado",
        imagen: "/images/equipo/equipo2.webp",
    },
    {
        nombre: "Dr. Lucía Sosa",
        rol: "Abogado",
        imagen: "/images/equipo/equipo3.webp",
    },
    {
        nombre: "Dr. Gimena Perez",
        rol: "Abogado",
        imagen: "/images/equipo/equipo4.webp",
    },
];

export default function NuestroEquipo() {
    return (
        <section className="bg-gray-100 sm:pt-25 pt-10 justify-center text-center">
            <h1 className="my-15 mb-30">EQUIPO</h1>
            {/* DESKTOP */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto hidden md:grid">
                {equipo.map((socio, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-[270px] h-[360px] bg-[#0c1d37] rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.12)] flex flex-col"
                    >
                        <div className="relative w-full h-[250px]">
                            <Image
                                src={socio.imagen}
                                alt={socio.nombre}
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                        <div className="bg-[#0c1d37] text-white text-center px-4 py-6 flex-1 flex flex-col justify-end">
                            <h4 className="header-dark font-semibold mb-3">{socio.nombre}</h4>
                            <p className="text-sm text-white italic uppercase tracking-widest mb-1">
                                {socio.rol}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>


            {/* MOBILE */}
            <div className="md:hidden w-full px-4 max-w-[90%] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-[#0c1d37] rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.12)]"
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={20}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        loop
                    >
                        {equipo.map((socio, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-72">
                                    <Image
                                        src={socio.imagen}
                                        alt={socio.nombre}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="text-white text-center px-4 py-6">
                                    <h4 className="header-dark font-semibold mb-3">{socio.nombre}</h4>
                                    <p className="text-sm italic uppercase tracking-widest mb-1">{socio.rol}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative max-w-5xl mx-auto mt-16 px-4"
            >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#0c1d37] group sm:h-[600px] h-[30vh] w-full">
                    <Image
                        src="/images/equipo/equipo5.webp"
                        alt="Equipo"
                        fill
                        className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                        sizes="100vw"
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
        </section>
    );
}
