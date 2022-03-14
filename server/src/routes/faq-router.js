import { Router } from 'express';
import { getFaq, addFaq, updateFaq, deleteFaq } from '../controllers/faq-page-controller.js';


const router = Router();

router.get('/', getFaq);
router.post('/', addFaq);
router.put('/:id', updateFaq);
router.delete('/:id', deleteFaq);

export default router;