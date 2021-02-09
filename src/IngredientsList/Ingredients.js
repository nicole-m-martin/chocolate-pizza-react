import React from 'react'
import IngredientItems from './ingredientItems.js';
import style from './ingredient.module.css';




export default class IngredientList extends React.Component {
  render() {
    return (
    <div className={style.divBackground}>
    <container className={style.ingredientCont}>
    <ul className={style.ingredientColumn1}>
      <li><IngredientItems amount='1 1/2 cups' name='milk' /></li>
      <li><IngredientItems amount='1/2 cup' name='marscapone' /></li>
      <li><IngredientItems amount='1/2 cups' name='pink salt' /></li>
      <li><IngredientItems amount='1 lb' name='Black Mission Fig' /></li>
      <li><IngredientItems amount='1/2 cups' name='brown sugar' /></li>
      <li><IngredientItems amount='2-4 tsp' name='water' /></li>
    </ul>
    </container>
    <container>
    <ul className={style.ingredientColumn2}>
      <li><IngredientItems amount='1 1/2 cups' name='heavy cream' /></li>
      <li><IngredientItems amount='1/3 cups' name='granulated sugar' /></li>
      <li><IngredientItems amount='2' name='egg yolks' /></li>
      <li><IngredientItems amount='1' name='lemon, juiced' /></li>
      <li><IngredientItems amount='2 tbspn' name='butter' /></li>
      <li><IngredientItems amount='1 cup' name='honey roasted pecans, roughly chopped' /></li>
    </ul>
    </container>
  </div>
    )
  }
} 
