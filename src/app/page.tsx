'use client'; // WAJIB ada di baris paling atas karena kita pakai animasi

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion untuk animasi
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { projects } from '../data/projects';

// Import Ikon dari React Icons
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiFigma, 
  SiMongodb
} from 'react-icons/si';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  // Data Tech Stack agar rapi
  const techStack = [
    { name: 'Next.js', url: 'https://nextjs.org', icon: <SiNextdotjs className="text-xl" /> },
    { name: 'React', url: 'https://react.dev', icon: <SiReact className="text-xl text-blue-400" /> },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: <SiTypescript className="text-xl text-blue-500" /> },
    { name: 'Node.js', url: 'https://nodejs.org', icon: <SiNodedotjs className="text-xl text-green-500" /> },
    { name: 'Tailwind', url: 'https://tailwindcss.com', icon: <SiTailwindcss className="text-xl text-cyan-400" /> },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org', icon: <SiPostgresql className="text-xl text-blue-300" /> },
    { name: 'MongoDB', url: 'https://www.mongodb.com', icon: <SiMongodb className="text-xl text-green-600" /> },
    { name: 'Figma', url: 'https://www.figma.com', icon: <SiFigma className="text-xl text-purple-400" /> },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden pt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />

        <div className="text-center max-w-4xl z-10 flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/20">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-black border-2 border-black">
                <Image 
                  src="/raga.foto.jpeg" 
                  alt="Raga Esa Pratama"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Available for Hire
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">digital</span><br />
              experiences.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Raga Esa Pratama</strong>. Junior developer yang fokus menciptakan website modern, cepat, dan interaktif.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Lihat Karyaku
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/10 transition">
              Hubungi Saya
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* --- SKILLS SECTION (DENGAN IKON & ANIMASI) --- */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack</h2>
          </FadeIn>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
            {techStack.map((tech, i) => (
              <FadeIn key={tech.name} delay={i * 0.1}>
                <motion.a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5, backgroundColor: 'rgba(39, 39, 42, 1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-lg font-semibold text-gray-300 hover:text-white hover:border-blue-500/50 transition cursor-pointer flex items-center justify-center gap-3 shadow-lg shadow-black/50"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS PREVIEW --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <FadeIn className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
              <p className="text-gray-400">Beberapa proyek pilihan yang pernah saya kerjakan.</p>
            </div>
            <Link href="/projects" className="hidden md:inline-block text-blue-400 hover:text-blue-300">
              Lihat Semua →
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link href="/projects" className="text-blue-400 hover:text-blue-300">
              Lihat Semua Project →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
