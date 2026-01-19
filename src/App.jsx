import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import { Analytics } from "@vercel/analytics/react"
import Publications from './components/sections/Publication'

const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Vercel Analytics */}
      <Analytics />

    </div>
  )
}

export default App