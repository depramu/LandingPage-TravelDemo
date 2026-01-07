import React from 'react';
import { ShieldCheck, Globe, Clock, CreditCard } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Globe size={32} />,
      title: "Global Coverage",
      description: "Access to over 500+ premium destinations worldwide with exclusive local guides."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Best Price Guarantee",
      description: "We match any competitor's price to ensure you get the best deal for your adventure."
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Support",
      description: "Our dedicated travel support team is available round the clock to assist you."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "100% Secure",
      description: "Your bookings and payments are protected by industry-leading security standards."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Wanderlust?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We go the extra mile to make sure your journey is nothing short of extraordinary.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;