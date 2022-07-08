class Likes {
    static totalLikes = async () => {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes');
      return response.json();
    }

    static likeGenerator = async (mealId) => {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes', {
        method: 'POST',
        body: JSON.stringify({
          item_id: mealId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return response.text();
    }

    // count number of likes
    static likesCount = (target, likesArray, numOfLikes) => {
      likesArray.forEach((obj) => {
        if (obj.item_id === target.id) {
          numOfLikes.innerHTML = `${obj.likes} likes `;
        }
      });
    }
}

export default Likes;