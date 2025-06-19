"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaBalanceScale,
    FaBriefcase,
    FaCarCrash,
    FaShieldAlt,
    FaUsers,
    FaScroll,
    FaHardHat
} from 'react-icons/fa';

export default function Servicios() {
    return (
        <section className="mx-auto flex flex-col justify-center items-center text-center">
            <div className="bg-gray-100">
                <h2 className="md:text-5xl text-3xl font-bold text-gray-800 mt-30 mb-10">
                    ÁREAS DE PRÁCTICA
                </h2>
                <div className="pt-10 pb-25 max-w-[85%] mx-auto mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", bounce: 0.5 },
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center space-y-4"
                            >
                                <FaBalanceScale className="text-8xl text-gray-900" />
                                <h3 className="text-2xl font-bold">Derecho civil</h3>
                                <p className="md:text-lg text-lg text-gray-800 text-center">Reclamos por daños, contratos, alquileres, desalojo y conflictos entre particulares.</p>
                            </motion.div>
                        </div>
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", bounce: 0.5 },
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center space-y-4"
                            >
                                <FaBriefcase className="text-8xl text-gray-900" />
                                <h3 className="text-2xl font-bold">Derecho Comercial</h3>
                                <p className="md:text-lg text-lg text-gray-800 text-center">Asesoramiento a empresas, sociedades, cheques, concursos, quiebras y contratos comerciales.</p>
                            </motion.div>
                        </div>
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", bounce: 0.5 },
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center space-y-4"
                            >
                                <FaCarCrash className="text-8xl text-gray-900" />
                                <h3 className="text-2xl font-bold">Accidentes de Tránsito</h3>
                                <p className="md:text-lg text-lg text-gray-800 text-center">Indemnizaciones por choques, lesiones o fallecimientos. Defensa y reclamos ante aseguradoras.</p>
                            </motion.div>
                        </div>
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", bounce: 0.5 },
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center space-y-4"
                            >
                                <FaShieldAlt className="text-8xl text-gray-900" />
                                <h3 className="text-2xl font-bold">Defensa del Consumidor</h3>
                                <p className="md:text-lg text-lg text-gray-800 text-center">Reclamos por incumplimientos, estafas, servicios defectuosos o abusos de empresas y comercios.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-15">
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", bounce: 0.5 },
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center space-y-4"
                            >
                                <FaUsers className="text-8xl text-gray-900" />
                                <h3 className="text-2xl font-bold">Derecho de Familia</h3>
                                <p className="md:text-lg text-lg text-gray-800 text-center">Divorcios, régimen de visitas, alimentos, tenencia de hijos y adopciones. Acompañamiento humano.</p>
                            </motion.div>
                        </div><div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", bounce: 0.5 },
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center space-y-4"
                            >
                                <FaScroll className="text-8xl text-gray-900" />
                                <h3 className="text-2xl font-bold">Sucesiones</h3>
                                <p className="md:text-lg text-lg text-gray-800 text-center">Tramitación completa de herencias, testamentos y división de bienes. Rápido y claro.</p>
                            </motion.div>
                        </div>
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", bounce: 0.5 },
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex flex-col items-center space-y-4"
                            >
                                <FaHardHat className="text-8xl text-gray-900" />
                                <h3 className="text-2xl font-bold">ART (Accidentes laborales)</h3>
                                <p className="md:text-lg text-lg text-gray-800 text-center">Reclamos contra la ART por accidentes de trabajo o enfermedades laborales. Defensa integral.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
