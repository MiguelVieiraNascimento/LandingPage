import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { content } from '@/data/content';

export default function Footer() {
  const { contact, businessName, colors } = content;

  return (
    <footer className={`${colors.primaryBg} text-white py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{businessName}</h3>
            <p className="text-blue-100">
              {content.hero.subtitle}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </div>
              {contact.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{contact.phone}</span>
                </div>
              )}
              {contact.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>{contact.email}</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <div className="flex items-start gap-2 text-blue-100">
              <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{contact.hours}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-500 pt-8 text-center text-blue-100">
          <p>{contact.footerText}</p>
        </div>
      </div>
    </footer>
  );
}
