import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/footer/Footer";
import Loader from "@/app/components/Loader";
import Navbar from "./navbar/Navbar";

export const metadata: Metadata = {
  title: "RR y Asociados",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Loader />
        <Navbar />
        {children}
        <Footer />
        {/* WhatsApp botón flotante */}
        <a
          href="https://api.whatsapp.com/send?phone=+522225649949&text=Hola!%20quiero%20m%C3%A1s%20informaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6.05L0 24l6.31-1.65A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.21-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.4l-.36-.22-3.75.98.99-3.64-.24-.38A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.47-7.53c-.28-.14-1.64-.81-1.89-.9-.25-.09-.44-.14-.62.14-.19.28-.72.9-.89 1.08-.17.18-.33.2-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.17.19-.28.28-.47.09-.19.04-.35-.02-.49-.06-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01s-.49.07-.74.35c-.25.28-.98.95-.98 2.3s1.01 2.67 1.15 2.85c.14.18 1.97 3.02 4.79 4.23.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
          </svg>
        </a>

        {/* NoScript para Meta Pixel */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=595686489877838&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </body>
    </html>
  );
}
