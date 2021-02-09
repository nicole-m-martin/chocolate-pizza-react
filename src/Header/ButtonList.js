import React from 'react'
import fbook from '../assets/fb-icon.png';
import twitter from '../assets/twit-icon.png'
import google from '../assets/gp-icon.png';
import insta from '../assets/insta-icon.png';
import flic from '../assets/flic-icon.png';
import pintrest from '../assets/pint-icon.png';
import rss from '../assets/rss-icon.png';
import mail from '../assets/mail-icon.png';
import buttonStyle from '../Header/HeaderStyle.module.css'



export default class ButtonList extends React.Component {

render() {
  return (
   <>
   <div className={buttonStyle.btnDiv}>
    <img alt="facebook" className={buttonStyle.btn} src={fbook} />
    <img alt="twitter" className={buttonStyle.btn} src={twitter} />
    <img alt="google" className={buttonStyle.btn} src={google} />
    <img alt="insta" className={buttonStyle.btn} src={insta} />
    <img alt="flic" className={buttonStyle.btn} src={flic} />
    <img alt="pint" className={buttonStyle.btn} src={pintrest} />
    <img alt="rss" className={buttonStyle.btn} src={rss} />
    <img alt="mail" className={buttonStyle.btn} src={mail} />
    </div>
    </>
    
    )
  }
}
