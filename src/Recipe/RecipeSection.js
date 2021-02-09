import React from 'react'
import style from './recipeStyle.module.css'

export default class MyRecipes extends React.Component {
  render() {
    return (
      <div>
        <p className={style.p}>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
        <p className={style.p}>Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cool.</p>
        <p className={style.p}>Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish, or glass tupperware. Freeze for at least two hours before serving.</p>
      </div>
    )
  }
}