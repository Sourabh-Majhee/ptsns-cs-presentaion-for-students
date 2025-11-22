import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Achievements from './components/Achievements';
import Innovation from './components/Innovation';
import SIH from './components/SIH';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Mentorship from './components/Mentorship';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Facilities />
        <Achievements />
        <Innovation />
        <SIH />
        <Benefits />
        <Gallery />
        <Mentorship />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;