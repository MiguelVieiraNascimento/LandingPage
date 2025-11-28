import { Phone } from 'lucide-react';
import { content } from '@/data/content';

export default function Navbar() {
  const { businessName, whatsappNumber, colors } = content;

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold ${colors.primaryText}`}>
              {businessName}
            </h1>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className={`flex items-center gap-2 ${colors.primaryBg} text-white px-6 py-2 rounded-full ${colors.primaryHover} transition-colors duration-200`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Contato</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
