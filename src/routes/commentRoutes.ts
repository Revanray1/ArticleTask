import express from 'express';
import CommentController from '../controllers/commentController';

const router = express.Router();

router.post('/:articleId', CommentController.commentOnArticle);
router.get('/:articleId', CommentController.getArticleComment);
router.post('/commentreply/:commentId', CommentController.commentOnComment);

export default router;
