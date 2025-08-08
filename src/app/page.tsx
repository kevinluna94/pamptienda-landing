// src/app/page.tsx
'use client'; // Esta directiva es necesaria para usar estado (useState)

import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import AuthModals from '../components/AuthModals';
import { useState } from 'react';

const Home: NextPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
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
    </>
  );
};

export default Home;