export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-zinc-800 bg-black text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-white font-bold">ragaes-ui</span>. 
          Built with <span className="text-blue-500">Next.js</span> & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}