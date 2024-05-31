import express from 'express';
// import { createFarms } from '../controllers/farms.js';
import { getFarms } from '../controllers/farms.js';
// import upload from '../controllers/multer.js';

const router = express.Router();

// Apply the upload middleware to handle file uploads in addProduct route
// router.post("/update", upload.single('profileImg'), createFarm);
router.get("/getFarms", getFarms);

export default router;
