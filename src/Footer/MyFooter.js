import React from 'react'
import vanessa from '../assets/van-pic.png'
import smallLogo from '../assets/small-logo.png'

export default class MyFooter extends React.Component {
  render() {
    return (
      <div>
        <img alt="Vanessa" className='' src={vanessa} />
        <h3>Vanessa Stevenson</h3>
        <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
        <img alt="logo" className='' src={smallLogo} />
        <p>Delicious 2013 | All Rights Reserved.</p>
        <p>Proudly published with Ghost.</p>
      </div>
      )
    }

}