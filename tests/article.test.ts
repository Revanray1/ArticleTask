import supertest from 'supertest';
import app from '../src/app';

describe('Article API', () => {
  it('should get all articles', async () => {
    const response = await supertest(app).get('/articles');
    expect(response.status).toBe(200);
  });

  it('should get an article by ID', async () => {
    const articleId = 15; 
    const response = await supertest(app).get(`/articles/${articleId}`);
    expect(response.status).toBe(200);
  });

  it('should create a new article', async () => {
    const newArticle = {
      nickname: 'user',
      title: 'Article Testing',
      content: 'This is to create new Article.'
     
    };

    const response = await supertest(app)
      .post('/articles/addArticle')
      .send(newArticle);

    expect(response.status).toBe(200);
  });
});
