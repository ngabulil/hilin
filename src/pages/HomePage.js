import React, { Component } from 'react'
import Hero from '../components/HomepageItem/Hero'
import OurService from '../components/HomepageItem/OurService'
import Team from '../components/HomepageItem/Team'
import Footer from '../components/Footer'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <OurService />
        <Team />
        <Footer />
      </div>
    )
  }
}
