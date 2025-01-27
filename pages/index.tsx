import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="relative">
        <div className="h-screen w-full backdrop-blur-sm mx-auto flex flex-col md:flex-row items-center justify-center absolute top-0 z-20 px-10">
          {/* Texto */}
          <div className="text-center md:text-left space-y-3">
            <h1 className="bg-gradient-to-bl bg-clip-text text-transparent font-extrabold bg-white/80 text-3xl leading-tight font-[jakarta-titulos]">
              Ismac
            </h1>
            <h1 className=" bg-clip-text text-transparent font-extrabold bg-gradient-to-br from-pink-500 to-indigo-500 text-7xl leading-tight font-[jakarta-titulos]">
              Agenda Virtual
            </h1>
            <p className="mt-4 bg-gradient-to-bl bg-clip-text text-transparent font-bold bg-white text-2xl sm:text-3xl font-[jakarta-titulos]">
              Diseña el futuro con nosotros
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  router.push("/#agenda");
                }}
                className={`bg-gradient-to-br from-pink-500 to-indigo-500 group relative inline-flex items-center overflow-hidden    py-2 transition hover:scale-105 active:scale-95 focus:outline-none rounded-xl stroke-white px-5 mx-auto`}
              >
                <div className={`absolute inset-0.5 rounded-xl`} />
                <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100" />
                <span className="text-white text-sm font-bold transition-all duration-200 flex items-center text-center mx-auto font-[jakarta-titulos]">
                  Mira la agenda
                </span>
              </button>
            </div>
          </div>

          {/* Imagen con animación */}
          <div className="relative mt-8 md:mt-0">
            <img
              style={{ animationDuration: "5000ms" }}
              src="/vr.webp"
              alt="Realidad Virtual"
              className="animate-bounce relative sm:w-[550px] rounded-lg transform transition-transform hover:scale-110"
            />
          </div>
        </div>
        <div className="relative p-4 shadow-md z-10 min-h-screen flex justify-center items-center bg-gradient-to-r overflow-hidden">
          <div
            style={{ animationDuration: "5000ms" }}
            className="absolute w-96 h-96 bg-gradient-to-br from-fuchsia-500 to-purple-300 rounded-full opacity-20 blur-xl animate-pulse -top-20 -left-20"
          ></div>
          <div
            style={{ animationDuration: "5000ms" }}
            className="absolute w-72 h-72 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full opacity-25 blur-xl animate-spin-slow -bottom-20 -right-10"
          ></div>
        </div>
      </section>

      <section className="py-10">
        <div className="space-y-5">
          <div
            className="w-full aspect-video bg-contain opacity-80"
            style={{ backgroundImage: "url(/hero2.jpg)" }}
          ></div>
          <h1 className="text-center bg-clip-text text-transparent font-extrabold bg-white text-3xl leading-tight font-[jakarta-titulos]">
            Mirando al pasado <br />
            Pensando el futuro
          </h1>
        </div>
      </section>
      <section
        id="agenda"
        className="w-11/12 mx-auto bg-gradient-to-br from-fuchsia-500 to-purple-300 p-10 rounded-3xl mb-10"
      >
        <h1 className="font-[jakarta-titulos] text-black/70 text-2xl text-center">
          Descubre nuestra agenda
        </h1>
        <div className="bg-white p-5 rounded-3xl">
          <img src="/qr.png" alt="" />
        </div>
      </section>
      <footer className="bg-gray-900 p-4 text-center">
        <p className="font-[jakarta-titulos]">
          &copy; {new Date().getFullYear()} Instituto tecnologico Ismac. Todos
          los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
