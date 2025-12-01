import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-brand-primary/10 rounded-lg">
              <Terminal className="w-6 h-6 text-brand-primary" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">FLUXIFY</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Dijital dünyada akışı yakalayın. Modern web teknolojileri ve Python çözümleriyle işinizi geleceğe taşıyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Anasayfa</a></li>
              <li><a href="#projects" className="hover:text-brand-primary transition-colors">Projeler</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">Hakkımızda</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Bizi Takip Edin</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-brand-dark transition-all text-slate-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-brand-dark transition-all text-slate-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-brand-dark transition-all text-slate-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Fluxify Agency. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;