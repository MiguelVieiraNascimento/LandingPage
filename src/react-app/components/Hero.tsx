import { content } from '@/data/content';

export default function Hero() {
  const { hero, whatsappNumber, colors } = content;

  const handleCtaClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {hero.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {hero.subtitle}
            </p>
            <button
              onClick={handleCtaClick}
              className={`${colors.primaryBg} text-white px-8 py-4 rounded-full text-lg font-semibold ${colors.primaryHover} transition-all duration-200 transform hover:scale-105 shadow-lg`}
            >
              {hero.cta}
            </button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={hero.image}
                alt={hero.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 ${colors.primaryBg} opacity-10 rounded-full blur-3xl`}></div>
            <div className={`absolute -top-6 -left-6 w-32 h-32 ${colors.primaryBg} opacity-10 rounded-full blur-3xl`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
