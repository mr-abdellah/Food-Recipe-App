class Likes {
    static totalLikes = async () => {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes');
      return response.json();
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