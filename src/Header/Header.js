import React from 'react'
// import style from './Header.module.css';
import logo from '../assets/logo.png';
import linePic from '../assets/line-pic.png'
import ButtonList from './ButtonList.js'
import style from '../Header/HeaderStyle.module.css'


export default class MyHeader extends React.Component {
  render() {
    return (
      <div className={style.headerDiv}>
        <img alt="logo" className={style.logo} src={logo} /> 
        <h1>Delicious</h1>
        <ButtonList />
        {/* <img className={style.linePic} src={linePic}></img> */}
      </div>
    )
  }
}