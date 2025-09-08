import React from "react";
import Header from "../components/Header";

const pilares = [
  {
    icon: "🤖",
    titulo: "Tecnología IA",
    descripcion:
      "Implementamos soluciones basadas en inteligencia artificial para potenciar tu experiencia.",
  },
  {
    icon: "🛠️",
    titulo: "Innovación",
    descripcion:
      "Nos enfocamos en la innovación continua para ofrecer herramientas avanzadas y accesibles.",
  },
  {
    icon: "🤝",
    titulo: "Compromiso",
    descripcion:
      "Estamos comprometidos con el éxito de nuestros usuarios y la ética en el desarrollo.",
  },
];

const avatares = [
  { nombre: "Lia" },
  { nombre: "Randy" },
  { nombre: "Copernico" },
];

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Video Hero */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          height="100%"
          className="background-video"
        >
          <source src="/video-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Bienvenido a Alma Codificada
          </h1>
          <p className="max-w-xl text-center text-lg">
            Creamos avatares virtuales inteligentes para conectar tecnología y
            personas con calidad y cercanía.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-3">
        
        {/* Izquierda - Imagen */}
        <div className="flex justify-center items-center">
          <img
            src="/avatar-placeholder.jpg"
            alt="Avatar Virtual"
            className="w-72 rounded-xl shadow-lg"
          />
        </div>

        {/* Centro - Pilares y Avatares */}
        <div className="flex flex-col gap-12">
          {/* Pilares */}
          <section>
            <h2 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-200 pb-2 mb-6">
              Nuestros Pilares
            </h2>
            <div className="flex flex-col gap-6">
              {pilares.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white text-3xl shadow-md">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-900">
                      {p.titulo}
                    </h3>
                    <p className="text-gray-600">{p.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Avatares */}
          <section>
            <h2 className="text-xl font-semibold text-purple-800 border-b border-purple-200 pb-2 mb-4 text-center">
              Avatares
            </h2>
            <div className="flex justify-center gap-6">
              {avatares.map((avatar, i) => (
                <div
                  key={i}
                  className="w-40 bg-purple-100 rounded-lg p-4 shadow hover:bg-purple-600 hover:text-white transition-colors text-center font-bold cursor-pointer"
                >
                  <div className="w-full h-36 bg-purple-200 rounded mb-3"></div>
                  {avatar.nombre}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Derecha - Información */}
        <div className="flex flex-col gap-10 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-2">
              Quiénes Somos
            </h2>
            <p>
              Alma Codificada es un proyecto de VStudio IA que crea avatares
              virtuales inteligentes, facilitando interacciones humanas con
              tecnología avanzada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-2">
              Nuestra Misión
            </h2>
            <p>
              Brindar soluciones innovadoras basadas en IA para mejorar la
              comunicación y el acceso a la información de forma natural y
              personalizada.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
