import './App.css';
import MyHeader from './Header/Header.js'
import MyImageSection from './ImageSection/MyImageSection.js'
import MyRecipes from './Recipe/RecipeSection.js'
import MyFooter from './Footer/MyFooter.js'
import IngredientList from './IngredientsList/Ingredients.js';

function App() {
  return (
    <>
    <MyHeader />
    <MyImageSection />
    <MyRecipes />
    <IngredientList />
    <MyFooter />
    
    </>
  )}

export default App;
