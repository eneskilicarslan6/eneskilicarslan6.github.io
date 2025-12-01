import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-24 bg-[#0B1120] border-t border-white/5" id="contact">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-brand-primary/5 border border-brand-primary/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bir Projeniz mi Var?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Python otomasyonları, Web tasarımı veya Mobil uygulama fikirleriniz için bizimle iletişime geçin.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="mailto:info@fluxify.agency" className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-brand-secondary transition-all">
                    <Mail size={20} />
                    Mail Gönder
                </a>
                <a href="https://wa.me/905435237760" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 border border-white/10 transition-all">
                    <MessageCircle size={20} />
                    WhatsApp
                </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex justify-center text-slate-500 text-sm gap-2">
                <MapPin size={16} />
                <span>TOKAT / TURKEY</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;