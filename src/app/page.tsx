// src/app/page.tsx - Código Corregido para incluir Header y Footer
'use client';

import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import AuthModals from '../components/AuthModals';
import Header from '../components/Header'; // Importamos Header aquí
import Footer from '../components/Footer'; // Importamos Footer aquí
import { useState } from 'react';

const Home: NextPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
      <main>
        <Hero setShowRegister={setShowRegister} />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <AuthModals
          showLogin={showLogin}
          handleCloseLogin={() => setShowLogin(false)}
          showRegister={showRegister}
          handleCloseRegister={() => setShowRegister(false)}
          setShowRegister={setShowRegister}
          setShowLogin={setShowLogin}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;