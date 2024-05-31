import express from 'express';
import { addProduct, getProduct } from "../controllers/prod.js";
import upload from '../controllers/multer.js';

const router = express.Router();

// Apply the upload middleware to handle file uploads in addProduct route
router.post("/addProduct", upload.single('prodImg'), addProduct);

router.get("/getProduct", getProduct);

export default router;
