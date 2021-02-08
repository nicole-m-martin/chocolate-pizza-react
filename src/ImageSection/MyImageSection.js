import React from 'react'
import pizza from '../assets/choco-pizza.png';
import style2 from './img.module.css';

export default class ImageSection extends React.Component {
  render() {
    return (
    <>
    <div>
    <h1>Chocolate Pizza</h1>
    <img alt="pizza" className='' src={pizza} />
    </div>
    </>
    )
  }
} 
