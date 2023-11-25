import supertest from 'supertest';
import app from '../src/app';

describe('Comment API', () => {
  it('should get all comments for an article', async () => {
    // const commentID: 15

    const response = await supertest(app).get('/comments/15'); // if assuming 15
    // const response = await supertest(app).get(`/comments/${commentID}`); // if you want to check Manually

    expect(response.status).toBe(200);
  });

  it('should create a new comment', async () => {
    const newComment = {
      articleId: 15,
      content: 'This is a new comment...',
      nickname: 'John',
    };

    const response = await supertest(app)
      .post('/comments/15')
      .send(newComment);

      expect(response.status).toBe(200);
  });

  it('should create a reply to a comment', async () => {
    const replyComment = {
      commentId: 3, 
      content: 'This is a reply comment',
      nickname: 'Jane Doe',
    };

    const response = await supertest(app)
      .post(`/comments/commentreply/${replyComment.commentId}`)
      .send(replyComment);
      expect(response.status).toBe(200);

  });
});
