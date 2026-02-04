import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Program'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus' 
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Videoplayer from './components/videoplayer/Videoplayer'

const App = () => {

    const [Playstate, setPlaystate] =useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our PROGRAM' title ='What We Offer' />
        <Programs />
        <About setPlaystate={setPlaystate}/>
        <Title subtitle='Gallery' title ='Campus Photos' />
        <Campus />
        <Title subtitle='TESTIMONIALS' title ='What Student Says' />
        <Testimonial />
        <Title subtitle='Contact Us' title ='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <Videoplayer Playstate={Playstate} setPlaystate={setPlaystate}/>
    </div>
  )
}

export default App
