import { Star } from 'lucide-react';
import { content } from '@/data/content';

export default function Testimonials() {
  const { testimonials, colors } = content;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {testimonials.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 fill-current ${colors.primaryText}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-gray-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
