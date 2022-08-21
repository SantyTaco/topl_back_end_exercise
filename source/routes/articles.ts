import express from 'express';
import ArticlesController from '../controllers/articles';

const router = express.Router();

const articlesController = new ArticlesController();

router.get('/articles/search', articlesController.getNewsByKeyWord);

export = router;