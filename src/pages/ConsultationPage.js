import React, { Component } from 'react'
import Header from '../components/ConsultationItem/ConsulHeader'
import Main from '../components/ConsultationItem/ConsulMain'
import Payment from '../components/ConsultationItem/ConsulPayment'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'



export default class ConsultationPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Main/>
        <Payment/>
        <Footer/>
      </div>
    )
  }
}
