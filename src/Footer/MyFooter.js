import React from 'react'
import vanessa from '../assets/van-pic.png'
import smallLogo from '../assets/small-logo.png'
import style from './footer.module.css'

export default class MyFooter extends React.Component {
  render() {
    return (
      <div className={style.footerContainer}>
        <section>
          <img alt="Vanessa" className={style.vanessa} src={vanessa} />
          <h3>Vanessa Stevenson</h3>
          <article>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</article>
          <button>SHARE RECIPE</button>
        </section>
        <section className={style.section2}>
          <img alt="logo" className={style.logo} src={smallLogo} />
          <p>Delicious 2013 | All Rights Reserved.</p>
          <p>Proudly published with Ghost.</p>
        </section>
      </div>
      )
    }
}