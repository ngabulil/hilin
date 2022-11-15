import React, { Component } from 'react'
import HeaderHomepage1 from '../components/HomepageItem/HeaderHomepage1'
import HeaderHomepage2 from '../components/HomepageItem/HeaderHomepage2'
import HeaderHomepage3 from '../components/HomepageItem/HeaderHomepage3'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderHomepage1 />
        <HeaderHomepage2 />
        <HeaderHomepage3 />
      </div>
    )
  }
}
