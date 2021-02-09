import React from 'react'
import IngredientItems from './ingredientItems.js';
import style from './ingredient.module.css';
import { IngredientArray } from '../data.js';




export default class IngredientList extends React.Component {
  render() {
    return (
    <div className={style.divBackground}>
      <section className={style.ingredientCont}>
        <ul className={style.ingredientColumn1}>
          {IngredientArray.map(item => <IngredientItems amount={item.amount} name={item.name} />)}
        </ul>
      </section>
  </div>
    )
  }
} 
