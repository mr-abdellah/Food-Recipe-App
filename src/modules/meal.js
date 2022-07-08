class Meal {
  static mealsData = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=japanese');
    const data = await response.json();
    return data.meals;
  }

  static mealsCounter = (meals) => meals.length
}

export default Meal;