'use client'; 

import Link from 'next/link';
import { motion } from 'framer-motion';

// 1. Update Interface biar nerima properti 'image'
interface ProjectProps {
  id: number;
  title: string;
  category: string;
  tech: string[];
  description: string;
  link: string;
  image: string; // ✅ WAJIB ADA: Biar typescript tau ada gambar
}

export default function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }} 
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-colors shadow-lg"
    >
      {/* --- BAGIAN GAMBAR (SUDAH DIPERBAIKI) --- */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-800">
        
        {/* Placeholder Loading (Kalau gambar belum muncul) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black animate-pulse" />

        {/* Tag Gambar "Sakti" (Bisa Link Luar & Lokal) */}
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Kalau gambar error/blank, sembunyikan gambar dan munculkan judul fallback
            e.currentTarget.style.display = 'none';
            // Opsional: ganti ke gambar default
            // e.currentTarget.src = "https://placehold.co/600x400?text=No+Preview";
          }}
        />

        {/* Overlay Biru saat Hover */}
        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/30 transition-colors duration-300" />
      </div>

      {/* --- KONTEN BAWAH --- */}
      <div className="flex flex-col flex-grow p-6 relative z-10">
        <div className="flex justify-between items-center mb-4">
           <span className="text-xs font-bold text-blue-400 px-2 py-1 bg-blue-900/20 rounded text-uppercase tracking-wider border border-blue-900/50">
             {project.category}
           </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* List Teknologi */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-[10px] text-gray-300 bg-zinc-800 border border-zinc-700 rounded hover:bg-zinc-700 transition-colors">
              {t}
            </span>
          ))}
        </div>

        <Link 
          href={project.link}
          target="_blank" // Biar buka di tab baru
          className="mt-auto w-full block py-3 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
        >
          Lihat Project 🚀
        </Link>
      </div>
    </motion.div>
  );
}
