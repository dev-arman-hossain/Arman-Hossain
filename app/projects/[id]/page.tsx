import { projectsData } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white flex-col gap-4">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link href="/#projects" className="text-blue-400 hover:underline">
          Go back to homepage
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 md:px-12 text-zinc-300">
        <div className="max-w-4xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Projects
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
             <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
               <ExternalLink size={18} /> Live Demo
             </a>
             <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors">
               <Code size={18} /> GitHub Repository
             </a>
          </div>

          <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-12 border border-zinc-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-lg leading-relaxed">{project.fullDesc}</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Challenges Faced</h2>
                <div className="glass-card p-6 border-l-4 border-l-amber-500">
                  <p>{project.challenges}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Future Plans</h2>
                 <div className="glass-card p-6 border-l-4 border-l-blue-500">
                  <p>{project.futurePlans}</p>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-zinc-800 rounded-lg text-sm text-zinc-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
