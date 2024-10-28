import React from 'react'
import Navbar from './components/Layout/Navbar'
import Home from './components/Home'
import Courses from './components/Courses'
import Teachers from './components/Teachers'
import AboutUs from './components/AboutUs'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Layout/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Courses />
      <Teachers />
      <AboutUs />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default App