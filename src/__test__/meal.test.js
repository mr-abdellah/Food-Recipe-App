import Meal from '../modules/meal.js';
// test meal counter function
describe('test meals counter function', () => {
  it('test meal counter', () => {
    const mealsArray = [
      {
        strMeal: 'Chicken Karaage',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg',
        idMeal: '53790',
      },
    ];
    expect(Meal.mealsCounter(mealsArray)).toBe(1);
  });
  it('test meal counter', () => {
    const mealsArray = [
      {
        strMeal: 'Chicken Karaage',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg',
        idMeal: '53790',
      },
      {
        strMeal: 'Honey Teriyaki Salmon',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
        idMeal: '53785',
      },
    ];
    expect(Meal.mealsCounter(mealsArray)).toBe(2);
  });
  it('test meal counter', () => {
    const mealsArray = [
    ];
    expect(Meal.mealsCounter(mealsArray)).toBe(0);
  });
});
