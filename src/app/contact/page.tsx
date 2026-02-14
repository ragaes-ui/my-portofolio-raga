import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FadeIn from '../../components/FadeIn';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-6 pt-20">
        <div className="w-full max-w-3xl text-center">
          
          <FadeIn>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
              ● Open for Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Let's work <br/>
              <span className="text-blue-600">together.</span>
            </h1>
            
            <p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto">
              Punya ide proyek menarik atau sekadar ingin menyapa? 
              Jangan ragu untuk menghubungi saya.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col sm:flex-row justify-center gap-6">
            {/* Tombol Email */}
            <Link 
              href="mailto:emailmu@example.com" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition transform hover:-translate-y-1"
            >
              📧 Kirim Email
            </Link>

            {/* Tombol WhatsApp / Sosmed Lain */}
            <Link 
              href="https://wa.me/6287782691132" // Ganti nomormu nanti
              target="_blank"
              className="group flex items-center justify-center gap-3 px-8 py-4 border border-zinc-700 bg-zinc-900 text-white font-bold rounded-full hover:bg-zinc-800 transition transform hover:-translate-y-1"
            >
              💬 WhatsApp
            </Link>
          </FadeIn>

          {/* Social Links Simple */}
          <FadeIn delay={0.4} className="mt-16 flex justify-center gap-8 text-gray-500">
            <Link href="#" className="hover:text-blue-500 transition">GitHub</Link>
            <Link href="#" className="hover:text-blue-500 transition">LinkedIn</Link>
            <Link href="https://instagram.com/ragaes_15" className="hover:text-blue-500 transition">Instagram</Link>
          </FadeIn>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
