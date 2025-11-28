import { content } from '@/data/content';

export default function Services() {
  const { services, colors } = content;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {services.title}
          </h2>
          {services.subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {services.subtitle}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service, index: number) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 ${colors.primaryBg} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
