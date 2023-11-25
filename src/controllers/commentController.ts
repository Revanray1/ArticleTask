import { Request, Response } from "express";
import CommentService from "../services/commentService";

class CommentController {
  static async commentOnArticle(req: Request, res: Response) {
    try {
      const articleId = req.params.articleId; 
      const { nickname, comment } = req.body;

      const results = await CommentService.postCommentOnArticle(
        articleId,
        nickname,
        comment
      );

      res.json({
        success: true,
        message: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getArticleComment(req: Request, res: Response) {
    try {
      const articleId = req.params.articleId; 
      const results = await CommentService.listArticleComments(articleId);

      res.json({
        success: true,
        message: "Fetched all comment of an article",
        data: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async commentOnComment(req: Request, res: Response) {
    const commentId = req.params.commentId;
    const { nickname, comment } = req.body;

    try {
      const results = await CommentService.postCommentOnComment(commentId,nickname,comment);

      res.json({
        success: true,
        message:results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default CommentController;
