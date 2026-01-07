import React from 'react';
import { Compass, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-brand-600 rounded-lg">
                <Compass size={20} />
              </div>
              <span className="text-xl font-serif font-bold">Wanderlust</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Crafting unforgettable travel experiences for adventurers, dreamers, and explorers worldwide since 2024.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-brand-500 transition-colors"
              />
              <button className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; 2024 Wanderlust Travel. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made by</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>dariRumah</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;