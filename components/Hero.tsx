import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const [dateValue, setDateValue] = useState('');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=1" 
          alt="Travel Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-50/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-wider mb-6 border border-white/30">
          EXPLORE THE WORLD WITH US
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Discover Your Next <br/>
          <span className="text-brand-400 italic">Great Adventure</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Unforgettable journeys to the world's most breathtaking destinations. 
          Let us handle the details while you make the memories.
        </p>

        {/* Search Box */}
        <div className="bg-white p-4 rounded-2xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full md:w-auto flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 hover:bg-slate-50 transition-colors rounded-lg group cursor-text relative">
            <MapPin className="text-brand-500 group-focus-within:text-brand-600" size={20} />
            <div className="text-left w-full">
              <label className="block text-xs text-slate-400 font-medium mb-1 cursor-pointer" htmlFor="location-input">Location</label>
              <input 
                id="location-input"
                type="text" 
                placeholder="Where do you want to go?" 
                className="w-full outline-none text-slate-800 font-medium placeholder-slate-300 bg-transparent" 
              />
            </div>
          </div>
          
          <div className="flex-1 w-full md:w-auto flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100 hover:bg-slate-50 transition-colors rounded-lg group cursor-pointer relative">
            <Calendar className="text-brand-500 group-focus-within:text-brand-600" size={20} />
            <div className="text-left w-full">
              <label className="block text-xs text-slate-400 font-medium mb-1">Date</label>
              {/* Visual text to show selection or placeholder */}
              <p className={`text-sm font-medium ${dateValue ? 'text-slate-800' : 'text-slate-300'}`}>
                {dateValue || 'Add dates'}
              </p>
            </div>
            {/* Invisible date input covering the container */}
            <input 
              type="date" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={(e) => setDateValue(e.target.value)}
            />
          </div>

          <button className="w-full md:w-auto bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-xl transition-all shadow-lg hover:shadow-brand-500/40 flex items-center justify-center gap-2 min-w-[120px]">
            <Search size={20} />
            <span className="font-medium">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;