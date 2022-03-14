import { Router } from 'express';
import { getTeams } from '../controllers/teams-page-controller.js';

const router = Router();

router.get('/', getTeams);

export default router;