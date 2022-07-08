/* eslint-disable no-await-in-loop */

import Meal from './meal.js';
import Likes from './likes.js';

const mainDiv = document.querySelector('#food-items');
// list of meals
const mealList = async (data) => {
  const mealCount = document.querySelector('#meal-count');
  const totalMeals = Meal.mealsCounter(data);
  mealCount.innerHTML = totalMeals;
  for (let i = 0; i < totalMeals; i += 1) {
    const foodDiv = document.createElement('div');
    foodDiv.classList.add('col-lg-4');
    const listItem = document.createElement('div');
    listItem.id = data[i].idMeal;
    foodDiv.setAttribute('data-id', `${data[i].idMeal}`);
    listItem.classList.add('meal-item', 'text-center', 'card', 'shadow', 'mb-4', 'border-0');
    const itemImage = document.createElement('div');
    itemImage.classList.add('meal-img');
    const image = document.createElement('img');
    image.src = data[i].strMealThumb;
    itemImage.appendChild(image);
    listItem.appendChild(itemImage);
    const itemText = document.createElement('div');
    itemText.classList.add('meal-name', 'd-flex', 'pt-3', 'justify-content-center', 'align-items-center');
    const mealName = document.createElement('h3');
    mealName.classList.add('fs-6', 'me-2', 'pt-1');
    mealName.innerHTML = data[i].strMeal;
    const likeBtn = document.createElement('i');
    likeBtn.classList.add('bi', 'bi-heart', 'like-btn', 'text-danger');
    likeBtn.id = data[i].idMeal;
    itemText.appendChild(mealName);
    itemText.appendChild(likeBtn);
    listItem.appendChild(itemText);
    const mealLikes = document.createElement('div');
    const numOfLikes = document.createElement('small');
    numOfLikes.innerHTML = '0 likes';
    mealLikes.appendChild(numOfLikes);
    listItem.appendChild(mealLikes);
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment', 'mb-4', 'mt-2');
    const reservationContainer = document.createElement('div');
    reservationContainer.classList.add('comment', 'mb-4', 'mt-2');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-warning', 'rounded-pill', 'px-4', 'shadow', 'comment-btn');
    button.setAttribute('id', `${data[i].idMeal}`);
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#staticBackdrop');
    button.innerHTML = 'comments';
    const reservationBtn = document.createElement('button');
    reservationBtn.classList.add('btn', 'btn-warning', 'rounded-pill', 'px-4', 'shadow', 'reservation-btn');
    reservationBtn.setAttribute('id', `${data[i].idMeal}`);
    reservationBtn.setAttribute('type', 'button');
    reservationBtn.setAttribute('data-bs-toggle', 'modal');
    reservationBtn.setAttribute('data-bs-target', '#staticBackdrop');
    reservationBtn.innerHTML = 'reservations';
    commentContainer.appendChild(button);
    reservationContainer.appendChild(reservationBtn);
    listItem.appendChild(commentContainer);
    listItem.appendChild(reservationContainer);
    foodDiv.appendChild(listItem);
    mainDiv.appendChild(foodDiv);
    const likesArray = await Likes.totalLikes();
    Likes.likesCount(likeBtn, likesArray, numOfLikes);
    likeBtn.addEventListener('click', async (e) => {
      await Likes.likeGenerator(likeBtn.id);
      const newLikes = await Likes.totalLikes();
      Likes.likesCount(e.target, newLikes, numOfLikes);
    });
  }
};

export default mealList;