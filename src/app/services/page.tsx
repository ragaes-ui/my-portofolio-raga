import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FadeIn from '../../components/FadeIn';

// Data Layanan (Bisa kamu edit kata-katanya nanti)
const services = [
  {
    title: "Web Development",
    description: "Membangun website responsif, cepat, dan modern menggunakan teknologi terbaru seperti Next.js dan React.",
    icon: "💻", 
  },
  {
    title: "UI/UX Design",
    description: "Merancang tampilan aplikasi yang tidak hanya cantik, tapi juga mudah digunakan oleh user (User Friendly).",
    icon: "🎨",
  },
  {
    title: "Backend & API",
    description: "Mengelola database dan server menggunakan Node.js dan PostgreSQL agar aplikasi berjalan aman dan lancar.",
    icon: "⚙️",
  },
  {
    title: "Website Maintenance",
    description: "Jasa perbaikan bug, update fitur, dan optimasi kecepatan untuk website yang sudah ada.",
    icon: "🛠️",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        
        {/* --- JUDUL HALAMAN --- */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-blue-500">Services.</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Saya tidak hanya menulis kode, tapi memberikan solusi digital untuk kebutuhan bisnis Anda.
          </p>
        </FadeIn>

        {/* --- GRID LAYANAN (KOTAK-KOTAK) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group p-8 h-full rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800/50 transition duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-6 bg-zinc-800 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition duration-300 shadow-lg shadow-blue-500/10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* --- CALL TO ACTION (Bagian Bawah) --- */}
        <FadeIn delay={0.6} className="mt-24 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 relative overflow-hidden">
             {/* Efek Cahaya Belakang */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 blur-3xl -z-10"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Punya Ide Proyek Lain?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Saya fleksibel untuk berbagai jenis proyek IT. Mari diskusikan kebutuhan spesifik Anda.
            </p>
            <a href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Hubungi Saya -
            </a>
          </div>
        </FadeIn>

      </div>
      <Footer />
    </main>
  );
}