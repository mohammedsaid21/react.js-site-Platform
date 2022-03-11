import React from 'react'
import NavBar from '../NavBar/NavBar'
import Catug from './Catug/Catug'
import Home from './Home'
import Metarials from './Metarials/Metarials'
import ScroolingBtn from './ScroolingBtn'
import Section from './Section/Section'
import Servies from './Servies/Servies'
import Testimonials from './Testimonials/Testimonials'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <ScroolingBtn />
      <Section />
      <Servies />
      <Metarials />
      <Catug />
      <Testimonials />
    </div>
  )
}

export default HomePage