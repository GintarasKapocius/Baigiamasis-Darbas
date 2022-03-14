import { Router } from 'express';
import { getBlogArticles } from '../controllers/blog-page-controller.js';

const router = Router();

router.get('/', getBlogArticles);

export default router;