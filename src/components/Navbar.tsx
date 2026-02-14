'use client'; // <--- MANTRA WAJIB INI JANGAN LUPA!

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // Kita aktifkan fiturnya biar menu yang aktif bisa beda warna

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' }, // <--- INI MENU BARUNYA (JANGAN LUPA KOMA)
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];
  

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold font-mono">
          ragaes<span className="text-blue-500">.dev</span>
        </Link>
        
        <div className="flex gap-6 md:gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-sm font-medium transition hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 ${
                pathname === link.href ? 'text-white font-bold' : 'text-gray-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
