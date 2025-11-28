import { MessageCircle } from 'lucide-react';
import { content } from '@/data/content';

export default function FloatingButton() {
  const { whatsappNumber, colors } = content;

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 ${colors.primaryBg} text-white p-4 rounded-full shadow-2xl ${colors.primaryHover} transition-all duration-200 transform hover:scale-110 z-50 animate-pulse`}
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
