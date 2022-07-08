class Comment {
    static totalComments = (comment) => {
      if (comment.length) return comment.length;
      return 0;
    }

      static postComment = async (data) => {
        const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments';
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return response.ok;
      }

      static getComment = async (item) => {
        const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments?item_id=${item.idMeal}`;
        let myComment = await fetch(url).then((response) => response.json());
        const ul = document.querySelector('#list-comment');
        ul.innerHTML = '';
        const h3 = document.querySelector('.comment-count');
        h3.innerHTML = `Comments(${Comment.totalComments(myComment)})`;
        if (!myComment.length) myComment = [];
        myComment.forEach((comment) => {
          ul.innerHTML += `
            <li class="d-flex justify-content-start align-items-center">
              <p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>
            </li>
          `;
        });
      }
}

export default Comment;