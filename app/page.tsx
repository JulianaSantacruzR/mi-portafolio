export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto font-sans">
      {/* Encabezado */}
      <header className="py-20">
        <h1 className="text-5xl font-bold text-blue-600">Hola, soy Juliana Santa 👩‍💻</h1>
        <p className="text-xl mt-4 text-gray-600">
          Desarrolladora enfocada en soluciones prácticas y modelado de datos. 
          Especialista en convertir lógica compleja en interfaces funcionales.
        </p>
      </header>

      {/* Sección de Proyectos */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-100 pb-2">Proyectos Destacados</h2>
        <div className="grid gap-6 mt-8">
          <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">Base de Datos de Transacciones</h3>
            <p className="mt-2 text-gray-600">Implementación de lógica relacional para identificar compras de usuarios y gestión de nodos.</p>
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <footer className="mt-20 py-10 text-center text-gray-500 border-t">
        <p>¿Tienes una prueba técnica o un proyecto en mente? ¡Hablemos!</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="#" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </footer>
    </main>
  );
}