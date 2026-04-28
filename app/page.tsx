import Image from 'next/image';
import { Mail, Download, ExternalLink } from 'lucide-react'; // Instala lucide-react si no lo tienes

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center px-6 py-12 md:px-24">
      {/* Navbar Simple */}
      <nav className="w-full max-w-7xl flex justify-between items-center mb-20">
        <h2 className="text-xl font-bold text-indigo-600">Juliana Santacruz</h2>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#sobre-mi">Sobre Mi</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </div>
        <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50 transition">
          Download Resume <span className="rotate-0 text-xs">☀️</span>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Juliana Santacruz <br />
              <span className="text-gray-800">Restrepo</span>
            </h1>
            <h3 className="text-2xl font-semibold text-indigo-600">
              Ingeniera de Sistemas
            </h3>
          </div>
          
          <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
            Especializada en análisis de datos, machine learning y ciencia de datos 
            con experiencia en Google Cloud Platform y visualización de datos.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
              Contactar
            </button>
            <button className="border border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center gap-2">
              Ver Proyectos
            </button>
            <button className="bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 transition">
              <Download size={20} />
            </button>
          </div>

          <div className="pt-4">
            <button className="text-gray-500 hover:text-indigo-600 transition border p-2 rounded-md">
              <Mail size={24} />
            </button>
          </div>
        </div>

        {/* Imagen con Círculo */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* El borde circular blanco/sombra */}
            <div className="absolute inset-0 rounded-full border-8 border-white shadow-2xl overflow-hidden">
              <Image 
                src="/tu-foto.png" // Asegúrate de poner tu foto en la carpeta public
                alt="Juliana Santacruz"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}