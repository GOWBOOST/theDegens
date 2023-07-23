import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import DragDrop from './components/DragDrop/DragDrop';
import Bring from './components/Bring/Bring';
import Rewards from './components/Rewards/Rewards';
import Portfolio from './components/Portfolio/Portfolio';
import TryDegens from './components/TryDegens/TryDegens';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <DragDrop />
        <Bring />
        <Rewards />
        <Portfolio />
        <TryDegens />
        <Footer />
        
    </div>
  )
}

export default App
