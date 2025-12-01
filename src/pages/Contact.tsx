import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-brand-dark flex flex-col justify-center">
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Bize Ulaşın</h1>
        <p className="text-slate-400">Projenizi detaylandırmak için aşağıdaki kanalları kullanabilirsiniz.</p>
      </div>

      <ContactSection />
    </div>
  );
};

export default Contact;