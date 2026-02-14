'use client'; // WAJIB ADA INI UNTUK ANIMASI

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectProps {
  id: number;
  title: string;
  category: string;
  tech: string[];
  description: string;
  link: string;
}

export default function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Efek muncul bergantian (stagger)
      whileHover={{ y: -10 }} // Efek naik saat mouse nempel
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-colors"
    >
      {/* Bagian Gambar */}
      <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors" />
        <motion.h3 
          className="text-2xl font-bold text-gray-700 group-hover:text-blue-400 transition-colors z-10"
          whileHover={{ scale: 1.1 }}
        >
          {project.title}
        </motion.h3>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
           <span className="text-xs font-bold text-blue-400 px-2 py-1 bg-blue-900/20 rounded text-uppercase tracking-wider">
             {project.category}
           </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* List Teknologi */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-[10px] text-gray-300 bg-zinc-800 border border-zinc-700 rounded">
              {t}
            </span>
          ))}
        </div>

        <Link 
          href={project.link}
          className="mt-auto w-full block py-3 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition shadow-lg shadow-blue-900/20"
        >
          Lihat Detail
        </Link>
      </div>
    </motion.div>
  );
}