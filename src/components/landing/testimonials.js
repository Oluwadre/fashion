import React from 'react'


const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Editor, Vogue",
    content:
      "The most innovative designs I've seen this season. Their attention to detail is unmatched in the industry.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Creative Director, Elle",
    content:
      "A perfect blend of avant-garde and wearable fashion. Each collection tells a unique story.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Fashion Blogger",
    content:
      "I've worked with many designers, but their vision and execution are truly exceptional.",
    rating: 4,
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          What People Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from industry experts and clients about our work and impact in
          the fashion world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials