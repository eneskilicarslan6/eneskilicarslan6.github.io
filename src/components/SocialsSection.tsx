import { socialPosts } from '../data/socials';
import { Youtube, Instagram, Play, ExternalLink } from 'lucide-react'; // TikTok ikonu Lucide'de bazen olmayabilir, yerine Play kullanırız
import { motion } from 'framer-motion';

const SocialsSection = () => {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Bizi <span className="text-brand-primary">Takip Edin</span>
          </h2>
          <p className="text-slate-400">
            Yazılım dünyasından ipuçları, proje süreçleri ve ofis hallerimiz için sosyal medyadayız.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative block rounded-2xl overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all"
            >
              {/* Görsel */}
              <img 
                src={post.thumbnail} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay (Karartma) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* İkonlar ve Metin */}
              <div className="absolute top-4 right-4">
                 {/* Platform İkonu */}
                 <div className={`p-2 rounded-full text-white ${
                    post.platform === 'youtube' ? 'bg-red-600' :
                    post.platform === 'instagram' ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' :
                    'bg-black border border-white/20' // Tiktok
                 }`}>
                    {post.platform === 'youtube' ? <Youtube size={20} /> :
                     post.platform === 'instagram' ? <Instagram size={20} /> :
                     <Play size={20} fill="currentColor" />}
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white font-bold text-lg leading-tight mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-slate-400 text-sm">
                  <span>{post.likes} İzlenme</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;