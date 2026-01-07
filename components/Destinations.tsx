import React from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '../types';

const mockDestinations: Destination[] = [
  {
    id: 1,
    title: "Bali, Indonesia",
    location: "Indonesia",
    price: 850,
    rating: 4.9,
    imageUrl: "https://picsum.photos/600/400?random=10",
    description: "Tropical paradise with lush jungles and pristine beaches."
  },
  {
    id: 2,
    title: "Santorini, Greece",
    location: "Greece",
    price: 1200,
    rating: 4.8,
    imageUrl: "https://picsum.photos/600/400?random=11",
    description: "Iconic white buildings overlooking the crystal blue Aegean Sea."
  },
  {
    id: 3,
    title: "Kyoto, Japan",
    location: "Japan",
    price: 1500,
    rating: 5.0,
    imageUrl: "https://picsum.photos/600/400?random=12",
    description: "Experience ancient temples, tea ceremonies and cherry blossoms."
  },
  {
    id: 4,
    title: "Machu Picchu, Peru",
    location: "Peru",
    price: 1100,
    rating: 4.9,
    imageUrl: "https://picsum.photos/600/400?random=13",
    description: "Explore the mysteries of the ancient Incan citadel in the Andes."
  },
  {
    id: 5,
    title: "Paris, France",
    location: "France",
    price: 950,
    rating: 4.7,
    imageUrl: "https://picsum.photos/600/400?random=14",
    description: "The city of love, art, fashion, and gastronomy."
  },
  {
    id: 6,
    title: "Reykjavik, Iceland",
    location: "Iceland",
    price: 1300,
    rating: 4.8,
    imageUrl: "https://picsum.photos/600/400?random=15",
    description: "Witness the northern lights and stunning geothermal landscapes."
  }
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Popular Destinations</h2>
            <p className="text-slate-500 max-w-xl">Curated list of the most visited and loved places by our community of travelers.</p>
          </div>
          <button className="text-brand-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All Places <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockDestinations.map((dest) => (
            <div key={dest.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.imageUrl} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-slate-800">{dest.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{dest.title}</h3>
                  <span className="text-brand-600 font-bold text-lg">${dest.price}</span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <MapPin size={16} />
                  <span>{dest.location}</span>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {dest.description}
                </p>
                
                <button className="w-full py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-semibold hover:border-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;