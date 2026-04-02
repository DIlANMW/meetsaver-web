import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Features from './components/Features.jsx'
import Privacy from './components/Privacy.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <> 
      <div className="bg-mesh" />
      <div className="bg-grid" />

      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Privacy />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
