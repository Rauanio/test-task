import express from 'express';
import { getGifts } from '../controllers/giftsController.js';

const router = express.Router();

router.get('/', getGifts);

export default router;
