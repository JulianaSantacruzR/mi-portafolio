// src/app/[lang]/page.tsx
import Image from 'next/image';
import { Mail, Download, Search, Sun } from 'lucide-react'; 
import { getDictionary } from '../dictionaries'; 

// CAMBIO 1: La función recibe params como una Promise
export default async function Home({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  
  // CAMBIO 2: Esperamos (await) a que los parámetros se resuelvan
  const { lang } = await params;
  
  // Cargamos el diccionario usando el lang ya extraído
  const dict = await getDictionary(lang);
 
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      
      {/* --- NAVEGACIÓN PRINCIPAL --- */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
          Juliana Santacruz R
        </div>
        
        <div className="flex-1 hidden md:flex items-center justify-center gap-9 text-base font-medium text-neutral-700">
          {[
            [dict.nav.about, '#about'],
            [dict.nav.experience, '#experience'],
            [dict.nav.projects, '#projects'],
            [dict.nav.skills, '#skills'],
            [dict.nav.contact, '#contact']
          ].map(([title, url]) => (
            <a 
              key={title} 
              href={url} 
              className="relative group transition hover:text-violet-600"
            >
              {title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold flex items-center gap-2 border border-neutral-300 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 transition shadow-sm">
            {dict.nav.resume}
            <Download className="w-4 h-4 text-violet-600" />
          </button>
          
          <button className="p-3 border border-neutral-300 rounded-full bg-white hover:bg-neutral-100 transition">
            <Sun className="w-5 h-5 text-amber-500" />
          </button>
        </div>
      </nav>
      
      {/* --- SECCIÓN HERO PRINCIPAL --- */}
      <main className="w-full max-w-7xl mx-auto px-6 py-16 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-3">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Juliana Santacruz<br/>
              <span className="text-neutral-700">Restrepo</span>
            </h1>
            
            <h2 className="text-3xl font-bold text-violet-600">
              {dict.hero.role}
            </h2>
          </div>
          
          <p className="text-xl leading-relaxed text-neutral-600 max-w-2xl">
            {dict.hero.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="group text-lg font-semibold bg-violet-600 text-white px-9 py-4 rounded-xl flex items-center gap-3 shadow-lg shadow-violet-200 hover:bg-violet-700 transition duration-300">
              {dict.hero.contactBtn}
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="text-lg font-semibold border border-neutral-300 text-neutral-700 px-9 py-4 rounded-xl flex items-center gap-2.5 hover:bg-neutral-100 transition duration-300">
              {dict.hero.projectsBtn}
              <Search className="w-5 h-5 text-violet-600" />
            </button>
            
            <button className="font-semibold text-neutral-700 bg-neutral-100 px-5 py-4 rounded-xl hover:bg-neutral-200 transition">
              CV
            </button>
          </div>
          
          <div className="pt-6">
            <button className="text-neutral-500 hover:text-violet-600 transition border p-2.5 rounded-xl hover:border-violet-200">
              <Mail size={26} />
            </button>
          </div>
        </div>
        
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-violet-100 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition duration-500"></div>
            
            <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] rounded-full border-[10px] border-white overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] bg-white transition duration-500 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)]">
              <Image 
                src="/mi-foto.jpg" 
                alt="Juliana Santacruz"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}