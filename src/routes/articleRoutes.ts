import express from "express";
import ArticleController from "../controllers/articleController";

const router = express.Router();

router.get("/", ArticleController.listArticles);
router.get("/:id", ArticleController.getArticleContent);
router.post("/addArticle", ArticleController.postArticle);

export default router;
