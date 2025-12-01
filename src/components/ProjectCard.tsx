import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10"
    >
      { }
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {   }
        <div className="absolute top-4 right-4 z-20 bg-brand-dark/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                {project.category}
            </span>
        </div>
      </div>

      { }
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {   }
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">
              {tech}
            </span>
          ))}
        </div>

        {   }
        <div className="flex gap-4 mt-auto">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
              <Github size={18} /> Kodlar
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-brand-primary hover:text-brand-secondary transition-colors">
              <ExternalLink size={18} /> Canlı Önizleme
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;