import React from 'react'
import style from './Header.module.css';

export default class MyHeader extends React.Component {
  render() {
    return (
      <div className={style.headerDiv}>
        <h1>Delicious</h1>
        <button className='twitter'>Twitter</button>
        <button className='facebook'>Facebook</button>
        <button className='insta'>Instagram</button>
      </div>
    )
  }
}