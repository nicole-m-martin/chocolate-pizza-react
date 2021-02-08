import React from 'react'
import style from './Header.module.css';
import fbook from '../assets/fb-icon.png';
import twitter from '../assets/twit-icon.png'
import google from '../assets/gp-icon.png';
import insta from '../assets/insta-icon.png';
import flic from '../assets/flic-icon.png';
import pintrest from '../assets/pint-icon.png';
import rss from '../assets/rss-icon.png';
import mail from '../assets/mail-icon.png';
import logo from '../assets/logo.png';

export default class MyHeader extends React.Component {
  render() {
    return (
      <div className={style.headerDiv}>
        <img alt="logo" className='' src={logo} /> 
        <h1>Delicious</h1>
        <img alt="facebook" className='' src={fbook} /> 
        <img alt="twitter" className='' src={twitter} />
        <img alt="google" className='' src={google} />
        <img alt="insta" className='' src={insta} />
        <img alt="flic" className='' src={flic} />
        <img alt="pint" className='' src={pintrest} />
        <img alt="rss" className='' src={rss} />
        <img alt="mail" className='' src={mail} />
      </div>
    )
  }
}