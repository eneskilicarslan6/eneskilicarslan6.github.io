import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["Hepsi", "Python", "Web Development", "C/C++"];
const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Hepsi");


  const filteredProjects = activeCategory === "Hepsi"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark relative" id="projects">
        {   }
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {   }
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Seçilmiş <span className="text-brand-primary">Projelerimiz</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Fluxify olarak geliştirdiğimiz, işlevselliği ve estetiği birleştiren çözümlerden bazıları.
          </p>
        </div>

        {   }
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-brand-primary text-brand-dark border-brand-primary shadow-lg shadow-brand-primary/25'
                  : 'bg-transparent text-slate-400 border-white/10 hover:border-brand-primary/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {   }
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
            <div className="text-center text-slate-500 py-10">
                Bu kategoride henüz vitrin projesi eklenmedi.
            </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;