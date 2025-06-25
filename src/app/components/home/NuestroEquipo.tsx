"use client"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
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
        rol: "Especialista en Derecho Civil y Comercial",
        imagen: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=500",
    },
    {
        nombre: "Dr. Nicolás Gómez",
        rol: "Abogado",
        imagen: "https://images.pexels.com/photos/5422796/pexels-photo-5422796.jpeg?auto=compress&cs=tinysrgb&h=500",
    },
    {
        nombre: "Lucía Sosa",
        rol: "Abogado",
        imagen: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=500",
    },
    {
        nombre: "Gimena Perez",
        rol: "Abogado",
        imagen: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=500",
    },
];

export default function NuestroEquipo() {
    return (
        <section className="bg-gray-100 mt-15 pt-15 justify-center text-center">
            <h1 className="my-15 mb-30">EQUIPO</h1>
            {/* DESKTOP */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto hidden md:flex">
                {equipo.map((socio, index) => (
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
                            <h4 className="header-dark font-semibold mb-3">{socio.nombre}</h4>
                            <p className="text-sm text-white italic uppercase tracking-widest mb-1">{socio.rol}</p>
                            {/* <p className="text-sm mt-2 text-white">{socio.descripcion}</p> */}
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

                                <img
                                    src={socio.imagen}
                                    alt={socio.nombre}
                                    className="w-full h-72 object-cover"
                                />
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
        </section>
    );
}
