// src/data/projects.ts

export const projects = [
  {
    id: 1,
    title: "SIMRS (Sistem Informasi RS)",
    category: "Web App",
    tech: ["Node.js", "Express", "React", "MySQL"],
    description: "Sistem manajemen rumah sakit terintegrasi untuk rekam medis dan administrasi.",
    // Link RSUD pakai Port :9990 biasanya GAGAL di-screenshot otomatis.
    // Jadi khusus yang ini, sebaiknya kamu upload foto manual (misal: /simrs.jpg) atau biarkan link ini (nanti jadi blank/placeholder).
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Frsudcibinong.id%3A9990?w=800&h=600", 
    link: "#",
    status: "Completed"
  },
  {
    id: 2,
    title: "Wedding Invitation",
    category: "Web Design",
    tech: ["Node.js", "MySql", "Animation"],
    description: "Undangan digital interaktif dengan fitur RSVP dan galeri foto.",
    // ✅ Otomatis Screenshot dari link invite-bridge
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Finvite-bridge.rcellfest.shop?w=800&h=600",
    link: "https://invite-bridge.ragaes.site",
    status: "Completed"
  },
  {
    id: 3,
    title: "Ticketing System",
    category: "Web App",
    tech: ["Node.js", "Mongodb", "QR Code"],
    description: "Sistem pemesanan dan validasi tiket event berbasis web.",
    // ✅ Otomatis Screenshot dari rcellfest.shop
    image: "/rcellfest.jpg",
    link: "https://rcellfest.shop",
    status: "complete"
  },
  {
    id: 4,
    title: "Web Cloud",
    category: "Cloud",
    tech: ["Wordpress"],
    description: "Kumpulan software crack, seperti printer, resseter printer, dll.",
    // ✅ Otomatis Screenshot dari Wordpress kamu
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Frcellcloud.wordpress.com?w=800&h=600",
    link: "https://rcellcloud.wordpress.com",
    status: "complete"
  },
  {
    id: 5,
    title: "KIOSK - RS Dev",
    category: "Web App",
    tech: ["html"],
    description: "Sistem kios k rs yang memudahkan untuk mengambil nomor antrian pasien.",
    // ✅ Otomatis Screenshot dari Vercel
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fkiosk-rs.vercel.app?w=800&h=600",
    link: "https://kiosk-rs.vercel.app",
    status: "complete"
  },
  {
    id: 6,
    title: "Aplikasi Streaming Ala netflix",
    category: "Web App",
    tech: ["html"],
    description: "Aplikasi Streaming seperti netflix, untuk menonton film, dll.",
    // ✅ Otomatis Screenshot dari Vercel
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Frcstream.vercel.app?w=800&h=600",
    link: "https://rcstream.vercel.app",
    status: "complete"
  }, 
  {
    id: 7,
    title: "Valentine-day Web",
    category: "Web App", 
    tech: ["Next.js","tailwind.css","React.js"],
    description: "Web valentine-day untuk merayakan valentine di hari valentine.",
    // ✅ Otomatis Screenshot dari ragaes.site
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fvalentine-day.ragaes.site?w=800&h=600",
    link: "https://valentine-day.ragaes.site",
    status: "complete"
  },
  {
    id: 8,
    title: "Blogger Inovasi",
    category: "Web App", 
    tech: ["html"],
    description: "inovasi blog rcell tech",
    // ✅ Otomatis Screenshot dari ragaes.site
    image: "https://s0.wordpress.com/mshots/v1/https%3A%2F%2Frcelltech.vercel.app?w=800&h=600",
    link: "https://rcelltech.vercel.app/",
    status: "complete"
  }
];
