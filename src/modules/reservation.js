class Reservation {
    static totalReservation = (reservation) => {
      if (reservation.length) return reservation.length;
      return 0;
    }

      static postReservation = async (data) => {
        const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/reservations';
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return response.ok;
      }

      static getReservation = async (item) => {
        const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/reservations?item_id=${item.idMeal}`;
        let myComment = await fetch(url).then((response) => response.json());
        const ul = document.querySelector('#list-comment');
        ul.innerHTML = '';
        const h3 = document.querySelector('.comment-count');
        h3.innerHTML = `Reservations(${Reservation.totalReservation(myComment)})`;
        if (!myComment.length) myComment = [];
        myComment.forEach((comment) => {
          ul.innerHTML += `
            <li class="d-flex justify-content-start align-items-center">
              <p>${comment.date_start} - ${comment.date_end} by ${comment.username}</p>
            </li>
          `;
        });
      }
}

export default Reservation;
