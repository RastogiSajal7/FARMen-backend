import express from 'express';
import { createFarms } from '../controllers/farms.js';
import { getFarms } from '../controllers/farms.js';

const router = express.Router();

router.post("/farms", createFarms);
router.get("/getFarms", getFarms);

export default router;
