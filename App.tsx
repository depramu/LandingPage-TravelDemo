import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import AITripPlanner from './components/AITripPlanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Destinations />
        <AITripPlanner />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;