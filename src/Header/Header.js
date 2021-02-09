import React from 'react'
import logo from '../assets/logo.png';
import ButtonList from './ButtonList.js'
import style from '../Header/HeaderStyle.module.css'


export default class MyHeader extends React.Component {
  render() {
    return (
      <div className={style.headerDiv}>
        <img alt="logo" className={style.logo} src={logo} /> 
        <h1>Delicious</h1>
        <ButtonList />
      </div>
    )
  }
}