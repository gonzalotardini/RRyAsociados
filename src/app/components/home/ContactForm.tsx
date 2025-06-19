"use client";

import { useState } from "react";
import type { ContactFormData } from "../../../types/contact";

export default function ContactForm() {
    const [form, setForm] = useState<ContactFormData>({
        name: "",
        number: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        const phoneRegex = /^[0-9()+\s-]+$/;

        if (!form.name) newErrors.name = "Nombre requerido";
        if (!form.number) {
            newErrors.number = "Teléfono requerido";
        } else if (!phoneRegex.test(form.number)) {
            newErrors.number = "Formato de teléfono inválido";
        } else if (form.number.replace(/\D/g, "").length < 10 || form.number.replace(/\D/g, "").length > 15) {
            newErrors.number = "El número debe tener entre 10 y 15 dígitos";
        }
        if (!form.email) newErrors.email = "Email requerido";
        if (form.email && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            newErrors.email = "Email inválido";
        if (!form.message) newErrors.message = "Mensaje requerido";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSuccess(true);
                setForm({ name: "", number: "", email: "", message: "" });
                setErrors({});
            } else {
                setError(true);
            }
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl text-gray-700 font-bold my-10">Envianos tu consulta</h2>
            {success && (
                <div className="p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50">
                    <span className="font-medium">¡Consulta enviada!</span> Te responderemos pronto.
                </div>
            )}
            {error && (
                <div className="p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50">
                    Error al enviar. Intenta de nuevo.
                </div>
            )}

            <div className="flex flex-wrap -m-2">
                {/* Nombre */}
                <div className="p-2 w-full lg:w-1/2">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.name && <small className="text-red-500 text-xs mt-1">{errors.name}</small>}
                </div>

                {/* Teléfono */}
                <div className="p-2 w-full lg:w-1/2">
                    <label htmlFor="number" className="leading-7 text-sm text-gray-600">
                        Teléfono
                    </label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={form.number}
                        onChange={handleChange}
                        disabled={loading}
                        onKeyDown={(e) => {
                            const allowedChars = /[0-9()+\s-]/;
                            if (e.key.length === 1 && !allowedChars.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {/* <small className="text-gray-500 text-xs">Ej: +54 9 11 2345-6789</small><br /> */}
                    {errors.number && <small className="text-red-500 text-xs mt-1">{errors.number}</small>}
                </div>

                {/* Email */}
                <div className="p-2 w-full">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.email && <small className="text-red-500 text-xs mt-1">{errors.email}</small>}
                </div>

                {/* Mensaje */}
                <div className="p-2 w-full">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out h-32"
                    ></textarea>
                    {errors.message && <small className="text-red-500 text-xs mt-1">{errors.message}</small>}
                </div>

                {/* Botón */}
                <div className="p-2 w-full">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 px-8 text-lg tracking-widest uppercase text-white rounded-full btn-contacto shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Enviando...
                            </>
                        ) : (
                            "ENVIAR"
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}
