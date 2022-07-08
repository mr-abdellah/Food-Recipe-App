import './style.css';
import Meal from './modules/meal.js';
import mealList from './modules/utils.js';

window.addEventListener('load', async () => mealList(await Meal.mealsData()));