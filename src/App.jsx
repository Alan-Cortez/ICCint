import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Events from './components/Events';
import Campus from './components/Campus';
import Forms from './components/Forms';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Events />
        <Campus />
        <Forms />
      </main>
      <Footer />
    </div>
  );
}

export default App;
