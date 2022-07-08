import Comment from '../modules/comment.js';

// test comment counter function
describe('test comment counter function', () => {
  it('test number of comments from the API', () => {
    const comment = [
      {
        comment: 'Excellent Meal',
        creation_date: '2022-07-06',
        username: 'Mirwais Farahi',
      },
      {
        comment: 'Nice Food',
        creation_date: '2022-07-07',
        username: 'Abdellah',
      },
      {
        comment: 'Great',
        creation_date: '2022-07-05',
        username: 'Henry',
      },
    ];

    expect(Comment.totalComments(comment)).toBe(3);
  });

  it('test number of comments from the API', () => {
    const comment = [

    ];

    expect(Comment.totalComments(comment)).toBe(0);
  });
});