import Reservation from '../modules/reservation.js';

// test reservation counter function
describe('test reservation counter function', () => {
  it('test number of reservations from the API', () => {
    const reservation = [
      {
        username: 'John',
        date_start: '2020-12-17',
        date_end: '2020-12-18',
      },

      {
        username: 'Jane',
        date_start: '2021-1-12',
        date_end: '2021-1-17',
      },
    ];

    expect(Reservation.totalReservation(reservation)).toBe(2);
  });

  it('test number of reservations from the API', () => {
    const reservation = [

    ];

    expect(Reservation.totalReservation(reservation)).toBe(0);
  });
});
