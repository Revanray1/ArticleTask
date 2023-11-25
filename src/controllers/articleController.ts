import { Request, Response } from "express";
import ArticleService from "../services/articleService";

export class ArticleController {
  static async postArticle(req: Request, res: Response) {
    try {
      const { nickname, title, content } = req.body; 

      if (!nickname || !title || !content) {
        return res.status(400).json({ error: "Some Fields are Missing" });
      }

      const message = await ArticleService.postArticle(
        nickname,
        title,
        content
      );

      res.json({
        success: true,
        message: message,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async listArticles(req: Request, res: Response) {
    const page = req.query.page as string;

    try {
      const results = await ArticleService.listAllArticles(page);

      res.json({
        success: true,
        message: "Fetched all articles",
        data: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getArticleContent(req: Request, res: Response) {
    try {
      const articleId = req.params.id;

      const results = await ArticleService.getArticleContent(articleId);
      res.json({
        success: true,
        message: "Fetched an article content Successfully",
        data: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default ArticleController;
