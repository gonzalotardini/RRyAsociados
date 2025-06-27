"use client";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="py-6 md:min-h-[25vh] flex justify-center items-center">
            <div className="container mx-auto px-6 md:px-12 text-center items-center justify-center md:grid md:grid-cols-3">
                {/* <div className="md:mx-auto md:flex md:justify-center md:items-center">
                    <Image
                        src="/images/logoAzul.png"
                        alt="Inovación"
                        width={300}
                        height={200}
                        className="md:w-[150px] w-[100px]"
                    />
                </div> */}
                <div className="">
                    <a
                        href="https://api.whatsapp.com/send?phone=+522225649949&text=Hola!%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="flex md:text-xl text-sm items-center gap-2 hover:scale-101 transition">
                            <FaWhatsapp className="text-blue-1000" />
                            +52 222 564 9949
                        </p>
                    </a>

                    <p className="flex md:text-xl text-sm items-center gap-2 hover:scale-101">
                        <FaEnvelope className="text-blue-1000" />
                        estudio@rryasociados.com.ar
                    </p>
                </div>

                <div className="hidden md:block ">
                    <div className="relative md:w-[300px] w-[200px] h-[25px] mb-5 items-center md:mx-auto">
                        <Image
                            src="/images/logoBlanco.png"
                            alt="RR & Asociados"
                            fill
                            className="object-contain"
                            sizes="150px"
                        />
                    </div>
                    <div className="md:block hidden md:text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} RR & ASOCIADOS. Todos los derechos reservados.
                    </div>
                </div>

                <div className="">
                    <a href="https://www.instagram.com/rr/"
                        target="_blank">
                        <p className="flex md:text-xl text-sm items-center gap-2 md:justify-end hover:scale-101">

                            <FaInstagram className="text-blue-1000" />
                            RRyAsociados
                        </p>
                    </a>

                    <a href="https://www.linkedin.com/company/rr/posts/?feedView=all"
                        target="_blank">
                        <p className="flex md:text-xl text-sm items-center gap-2 md:justify-end hover:scale-101">

                            <FaLinkedin className="text-blue-1000" />
                            RRyAsociados
                        </p>
                    </a>
                </div>
                <div className="md:hidden">
                    <div className="relative w-[150px] h-[25px] flex">
                        <Image
                            src="/images/logoBlanco.png"
                            alt="RR & Asociados"
                            fill
                            className="object-contain"
                            sizes="150px"
                        />
                    </div>
                    <div className="text-left text-gray-400 text-sm">
                        © {new Date().getFullYear()} RR & ASOCIADOS. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;