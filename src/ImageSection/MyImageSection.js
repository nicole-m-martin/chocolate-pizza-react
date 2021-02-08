import React from 'react'
import pizza from '../assets/choco-pizza.png';
import style2 from './img.module.css';

export default class ImageSection extends React.Component {
  render() {
    return (
    <>
    <div>
    <h1>Chocolate Pizza</h1>
    <h5>POSTED ON 15 DEC 2013 / DESSERTS</h5>
    <img alt="pizza" className='' src={pizza} />
    </div>
    </>
    )
  }
} 
