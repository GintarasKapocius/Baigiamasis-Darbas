import { Router } from 'express';
import { getLinks } from '../controllers/links-page-controller.js';

const router = Router();

router.get('/', getLinks);

export default router;