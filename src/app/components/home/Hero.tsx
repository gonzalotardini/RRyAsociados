"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative md:h-[90vh] h-[70vh] flex items-center justify-center text-white text-center px-4">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-top"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center">
        {/* <Link href="/">
            <div className="relative w-[150px] h-[100px] md:w-[200px] md:h-[150px] mt-10">
                <Image
                    src="/images/logoBlanco.png"
                    alt="RR"
                    fill
                    sizes="(max-width: 768px) 150px, 200px"
                    className="object-contain"
                />
            </div>
        </Link> */}
      </div>

      <div className="relative z-20 md:p-8 md:max-w-7xl">

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="header-hero tracking-wider"
        >
          RR & ASOCIADOS
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="md:text-5xl mb-6 tracking-wider text-xl header-principal mt-4"
        >
          Atendemos tu caso con la seriedad que merece y la empatía que necesitás.
        </motion.p>

        <div className="overflow-x-hidden overflow-y-hidden">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <Link href="https://api.whatsapp.com/send?phone=+522225649949&text=Hola!%20quiero%20m%C3%A1s%20informaci%C3%B3n" target="_blank">
              <button
                type="button"
                className="px-5 py-2 md:mt-8 md:px-8 md:py-3 bg-white text-black font-bold text-xl tracking-widest uppercase border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:text-black hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                contactanos
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
