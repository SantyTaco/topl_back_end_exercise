import express from 'express';
import ArticlesController from '../controllers/articles';

const router = express.Router();

const newsController = new ArticlesController();

router.get('/articles/search', newsController.getNewsByKeyWord);

export = router;