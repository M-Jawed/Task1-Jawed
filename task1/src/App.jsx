import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/LandingPage'
import Content from './components/Content'
import Features from './components/Features'
import Form from './components/Form'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import ShowCase from './components/ShowCase'
import Team from './components/Team'
import Contact from './components/Contact'
import Pricing from './components/PricingTable'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Landing />
      <Content />
      <Features />
      <Form />
      <Testimonial />
      <CallToAction />
      <ShowCase />
      <Team />
      <Contact />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
