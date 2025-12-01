import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Ticaret Veri Analiz Botu",
    description: "Rakip firmaların fiyatlarını saniyeler içinde analiz edip raporlayan gelişmiş bir Python otomasyonu.",
    category: "Python",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "Selenium", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Kurumsal Ajans Web Sitesi",
    description: "Modern, hızlı ve SEO uyumlu, React ile geliştirilmiş, yönetim panelli kurumsal web arayüzü.",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Gömülü Sistem Kontrolcüsü",
    description: "Düşük seviyeli bellek yönetimi ve yüksek performans gerektiren donanım haberleşme yazılımı.",
    category: "C/C++",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    technologies: ["C", "C++", "Assembly"],
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Sosyal Medya Yönetim Aracı",
    description: "Tek bir panelden tüm sosyal medya hesaplarına içerik planlaması yapan SaaS projesi.",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://github.com",
  }
];