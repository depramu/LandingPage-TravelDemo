import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Map, Wallet, Clock } from 'lucide-react';
import { generateItinerary } from '../services/geminiService';
import { LoadingState } from '../types';

const AITripPlanner: React.FC = () => {
  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    budget: 'Medium',
    interests: ''
  });
  const [result, setResult] = useState<string>('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.destination || !formData.duration) return;

    setStatus(LoadingState.LOADING);
    try {
      const itinerary = await generateItinerary(formData);
      setResult(itinerary);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setStatus(LoadingState.ERROR);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="planner" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Form */}
          <div className="w-full lg:w-1/3">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-brand-500/20 text-brand-300 p-2 rounded-lg">
                <Sparkles size={24} />
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">AI Trip Planner</h2>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Not sure where to start? Let our advanced AI architect the perfect itinerary tailored specifically to your preferences.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Destination</label>
                <div className="relative">
                  <Map className="absolute left-3 top-3 text-slate-500" size={18} />
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="e.g., Tokyo, Japan"
                    className="w-full bg-white/10 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Duration (Days)</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-slate-500" size={18} />
                    <input
                      type="number"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="e.g., 7"
                      className="w-full bg-white/10 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Budget</label>
                  <div className="relative">
                    <Wallet className="absolute left-3 top-3 text-slate-500" size={18} />
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    >
                      <option value="Low" className="text-slate-900">Budget</option>
                      <option value="Medium" className="text-slate-900">Standard</option>
                      <option value="High" className="text-slate-900">Luxury</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Interests</label>
                <input
                  type="text"
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  placeholder="e.g., Food, History, Nature"
                  className="w-full bg-white/10 border border-white/10 rounded-xl py-2.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={status === LoadingState.LOADING}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === LoadingState.LOADING ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Generating...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Generate Itinerary
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side: Result Display */}
          <div className="w-full lg:w-2/3 min-h-[500px] bg-white rounded-3xl p-8 shadow-2xl relative">
             {status === LoadingState.IDLE && (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                 <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                   <Map size={40} className="text-slate-300" />
                 </div>
                 <p className="text-lg font-medium">Your dream itinerary will appear here.</p>
                 <p className="text-sm">Fill out the form to get started.</p>
               </div>
             )}

             {status === LoadingState.LOADING && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-10 rounded-3xl">
                  <Loader2 size={48} className="text-brand-600 animate-spin mb-4" />
                  <p className="text-slate-600 font-medium animate-pulse">Consulting travel experts...</p>
                </div>
             )}
             
             {status === LoadingState.ERROR && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 p-8 text-center">
                  <p className="text-lg font-bold">Oops! Something went wrong.</p>
                  <p>Please check your API Key or try again later.</p>
                </div>
             )}

             {status === LoadingState.SUCCESS && (
               <div className="prose prose-slate max-w-none h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                 {/* Simple formatting for the result text since we aren't using a markdown library */}
                 <div className="whitespace-pre-wrap font-sans text-slate-700 leading-relaxed">
                   {result}
                 </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITripPlanner;