import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Adventure Traveler",
    content: "The AI itinerary planner completely changed how I travel. It found hidden gems in Kyoto that I would never have discovered on my own!",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Traveler",
    content: "Seamless booking experience and top-notch support. Wanderlust takes the stress out of planning complex trips.",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Family Vacationer",
    content: "We needed a family-friendly plan for Bali, and the suggestions were perfect. The kids loved every moment!",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">What Travelers Say</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Don't just take our word for it. Read reviews from our happy community of explorers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((item) => (
            <div key={item.id} className="bg-slate-50 p-8 rounded-3xl relative hover:shadow-lg transition-shadow">
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.avatarUrl} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-brand-600">{item.role}</p>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed italic relative z-10">
                "{item.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;