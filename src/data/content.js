import { CheckCircle, Star, Phone, Clock, MapPin, Mail } from 'lucide-react';

export const content = {
  businessName: "OdontoClean São Gonçalo",
  whatsappNumber: "5521999999999",
  colors: {
    primary: "blue-600",
    primaryBg: "bg-blue-600",
    primaryText: "text-blue-600",
    primaryHover: "hover:bg-blue-700"
  },
  hero: {
    title: "Seu sorriso merece o melhor tratamento em São Gonçalo",
    subtitle: "Tecnologia de ponta e atendimento humanizado no coração do Alcântara.",
    cta: "Agendar Avaliação Gratuita",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
  },
  services: {
    title: "Nossos Tratamentos",
    subtitle: "Oferecemos os melhores tratamentos odontológicos com equipamentos de última geração",
    items: [
      { 
        icon: Star, 
        title: "Implantes", 
        desc: "Recupere sua autoestima com implantes de titânio." 
      },
      { 
        icon: CheckCircle, 
        title: "Ortodontia", 
        desc: "Alinhadores invisíveis e aparelhos modernos." 
      },
      { 
        icon: Star, 
        title: "Clareamento", 
        desc: "Dentes brancos em poucas sessões." 
      }
    ]
  },
  testimonials: {
    title: "O que dizem nossos pacientes",
    items: [
      { name: "Maria Silva", text: "Atendimento excelente, mudei meu sorriso!" },
      { name: "João Souza", text: "Profissionais muito qualificados no Alcântara." },
      { name: "Ana Costa", text: "Recomendo para toda a família." }
    ]
  },
  contact: {
    address: "Rua Yolanda Saad Abuzaid, 100 - Alcântara",
    phone: "(21) 99999-9999",
    email: "contato@odontoclean.com.br",
    hours: "Seg-Sex: 8h-18h | Sáb: 8h-12h",
    footerText: "© 2024 OdontoClean. Todos os direitos reservados."
  }
}
