import React from 'react'
import Hero from '../components/Hero.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Features from '../components/Features.jsx'
import Privacy from '../components/Privacy.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'
import SEOSections from '../components/SEOSections.jsx'
import ManualTasks from '../components/ManualTasks.jsx'
import BlogTeaser from '../components/BlogTeaser.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <SEOSections />
      <HowItWorks />
      <ManualTasks />
      <Features />
      <Privacy />
      <BlogTeaser />
      <FAQ />
      <CTA />
    </main>
  )
}
