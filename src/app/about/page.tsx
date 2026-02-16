import Image from 'next/image';
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer';
import FadeIn from '../../components/FadeIn';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        
        {/* --- BAGIAN 1: PERKENALAN --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <FadeIn className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-zinc-800 rotate-3 hover:rotate-0 transition duration-500 shadow-2xl shadow-blue-500/20">
               <Image 
                  src="/raga.foto.jpeg" 
                  alt="Raga Esa Pratama"
                  fill
                  className="object-cover"
               />
            </div>
          </FadeIn>

          <div className="w-full md:w-1/2">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-blue-500">Me.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Halo! Saya <span className="text-white font-semibold">Raga Esa Pratama</span>. Saat ini saya adalah mahasiswa di 
                <span className="text-white font-semibold"> Universitas Terbuka (UT)</span> yang fokus mendalami dunia Web Development.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Saat sedang tidak sibuk menatap layar laptop, Anda bisa menemukan saya di lapangan untuk bermain <span className="text-white font-semibold">Futsal</span> atau <span className="text-white font-semibold">Bulu Tangkis</span>. 
                Saya percaya tubuh yang aktif mendukung kejernihan pikiran dalam memecahkan masalah teknis yang rumit.
              </p>

              {/* TOMBOL DOWNLOAD CV & SOSIAL MEDIA */}
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="/cv-raga-esa-pratama-update.pdf" 
                  download 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition transform hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center gap-2"
                >
                  <span>📥</span> Download CV
                </a>
                
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/ragaes-ui" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-white transition hover:bg-zinc-800 text-xl"
                    title="GitHub Profile"
                  >
                    💻
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/raga-esa-pratama-8a8198276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-blue-500 transition hover:bg-zinc-800 text-xl"
                    title="LinkedIn Profile"
                  >
                    🔗
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* --- BAGIAN 2: TIMELINE / PENDIDIKAN --- */}
        <div className="max-w-4xl mx-auto mb-24">
          <FadeIn delay={0.4}>
            <h2 className="text-2xl font-bold mb-12 text-center border-b border-zinc-800 pb-4">
              Perjalanan & Pendidikan
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="w-0.5 h-full bg-zinc-800 mt-2"></div>
                </div>
                <div>
                  <span className="text-sm text-blue-400 font-mono">2024 - Sekarang</span>
                  <h3 className="text-xl font-bold">Universitas Terbuka</h3>
                  <p className="text-gray-400 font-medium">S1 Sistem Informasi</p>
                  <p className="text-gray-500 mt-2 max-w-xl text-sm leading-relaxed">
                    Fokus pada algoritma, basis data, dan pengembangan sistem informasi mandiri.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-zinc-600 rounded-full"></div>
                  <div className="w-0.5 h-full bg-zinc-800 mt-2"></div>
                </div>
                <div>
                  <span className="text-sm text-gray-500 font-mono">2023 - 2026</span>
                  <h3 className="text-xl font-bold">IT Support</h3>
                  <p className="text-gray-400 font-medium">PT KEMALA INTI SOLUSI (RSUD CIBINONG)</p>
                  <p className="text-gray-500 mt-2 max-w-xl text-sm leading-relaxed">
                    Melakukan maintenance hardware, software, dan troubleshooting SIMRS untuk kelancaran operasional rumah sakit.
                  </p>
                </div>
              </div>
              
              {/* ITEM 3: SMK (BARU DITAMBAHKAN) */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-zinc-600 rounded-full"></div>
                  {/* Garis vertikal dihilangkan pada item terakhir agar lebih rapi, atau bisa dibiarkan jika akan ada item lain */}
                </div>
                <div>
                  <span className="text-sm text-gray-500 font-mono">20XX - 20XX</span> {/* Ganti Tahun Sesuai Kelulusan */}
                  <h3 className="text-xl font-bold">SMK (Nama Sekolah)</h3> {/* Ganti Nama Sekolah */}
                  <p className="text-gray-400 font-medium">Administrasi Perkantoran</p>
                  <p className="text-gray-500 mt-2 max-w-xl text-sm leading-relaxed">
                    Mempelajari manajemen kearsipan, korespondensi, dan tata kelola administrasi perkantoran secara profesional.
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

        {/* --- BAGIAN 3: ACADEMIC & TECH FOCUS --- */}
        <FadeIn delay={0.6} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/30 transition group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-2xl">🎓</div>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition">Academic Focus</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Mendalami teori struktur data dan basis data untuk membangun fondasi teknis yang kuat di UT.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Algoritma', 'Basis Data', 'Sistem Operasi'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800 text-[10px] rounded-full border border-zinc-700 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/30 transition group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl">🚀</div>
                <h3 className="text-xl font-bold group-hover:text-purple-400 transition">Dev Journey</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Mengembangkan proyek web modern seperti SIMRS dan undangan digital menggunakan Node.js.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800 text-[10px] rounded-full border border-zinc-700 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
      <Footer />
    </main>
  );
}
