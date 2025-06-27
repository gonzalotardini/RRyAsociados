import ContactForm from "./ContactForm";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="md:max-w-[70%] max-w-[90%] mx-auto">
        <h1 className="text-center font-bold text-gray-00 mb-25">
          CONTACTO
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mx-auto">

          {/* MAPA + INFO */}
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">¿Dónde estamos?</h3>
            <p className="text-base text-gray-700 mb-4">
              Nuestra oficina está ubicada en el corazón de San Martín, frente a la plaza principal.
            </p>
            <p className="flex items-center gap-2 text-md text-gray-800 mb-2">
              <FaMapMarkerAlt className="text-primary" />
              San lorenzo 2108 Piso 10 oficinas 4 y 5 - San Martin centro
            </p>
            <p className="flex items-center gap-2 text-md text-gray-800 mb-2">
              <FaWhatsapp className="text-primary" />
              +54 9 11 5767-2793
            </p>
            <p className="flex items-center gap-2 text-md text-gray-800">
              <FaEnvelope className="text-primary" />
              estudio@rryasociados.com.ar
            </p>
            <iframe
              title="Ubicación RR & Asociados"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.073273903328!2d-58.54143112350448!3d-34.57701245608974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb77139b29c19%3A0x2c7749e3ce33b1df!2sSan%20Lorenzo%202108%2C%20B1659%20San%20Mart%C3%ADn%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1750268915881!5m2!1ses-419!2sar"
              width="100%"
              height="410"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg mt-8 shadow-md"
            />          </div>

          {/* FORMULARIO */}
          <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Escribinos para una consulta</h3>
            <p className="text-base text-gray-700 mb-4">
              Completá el formulario y nos pondremos en contacto con vos a la brevedad.
            </p>
            <ContactForm />
          </div>
        </div>

      </div>

    </section>
  );
}
