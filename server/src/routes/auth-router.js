
import express from 'express';
import { 
  login,
  checkEmail,
} from '../controllers/auth-controller.js';

const router = express.Router();

router.post('/login', login);

router.get('/checkEmail', checkEmail);

export default router;