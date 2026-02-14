import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';
import FadeIn from '../../components/FadeIn';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-12">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              All <span className="text-blue-500">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Kumpulan hasil eksplorasi kodingan saya, mulai dari aplikasi web, desain UI, hingga eksperimen teknologi terbaru.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}