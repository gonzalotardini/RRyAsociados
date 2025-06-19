"use client";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-purpleColor py-6">
            <div className="container mx-auto px-6 md:px-12 text-center items-center justify-center">
                {/* <div className="md:mx-auto md:flex md:justify-center md:items-center">
                    <Image
                        src="/images/logoAzul.png"
                        alt="Inovación"
                        width={300}
                        height={200}
                        className="md:w-[150px] w-[100px]"
                    />
                </div> */}
                <div className="md:grid md:grid-cols-2">
                    <a
                        href="https://api.whatsapp.com/send?phone=+522225649949&text=Hola!%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="flex md:text-xl text-sm items-center gap-2">
                            <FaWhatsapp className="text-blue-1000" />
                            +52 222 564 9949
                        </p>
                    </a>
                    <a href="https://www.instagram.com/rr/"
                        target="_blank">
                        <p className="flex md:text-xl text-sm items-center gap-2 md:justify-end">

                            <FaInstagram className="text-blue-1000" />
                            RRyAsociados
                        </p>
                    </a>

                </div>
                <div className="md:grid md:grid-cols-2 justify-between items-center">
                    <p className="flex md:text-xl text-sm items-center gap-2">
                        <FaEnvelope className="text-blue-1000" />
                        estudio@rryasociados.com.ar
                    </p>

                    <a href="https://www.linkedin.com/company/rr/posts/?feedView=all"
                        target="_blank">
                        <p className="flex md:text-xl text-sm items-center gap-2 md:justify-end">

                            <FaLinkedin className="text-blue-1000" />
                            RRyAsociados
                        </p>
                    </a>
                </div>

                {/* Derechos de autor */}
                <div className="mt-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} RR & ASOCIADOS. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;