import Link from "next/link";

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
        <h1 className="md:text-8xl font-extrabold tracking-wider text-4xl header-principal">
          RR & ASOCIADOS
        </h1>
        <p className="md:text-5xl mb-6 tracking-wider text-xl header-principal mt-4">Atendemos tu caso con la seriedad que merece y la empatía que necesitás.</p>
        <Link href="https://api.whatsapp.com/send?phone=+522225649949&text=Hola!%20quiero%20m%C3%A1s%20informaci%C3%B3n" target="_blank">
          <button
            type="button"
            className="px-5 py-2 md:mt-8 md:px-8 md:py-3 bg-white text-black font-bold text-xl tracking-widest uppercase border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:text-black hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            contactanos
          </button>
        </Link>
      </div>
    </section>
  );
}
