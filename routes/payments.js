import express from 'express';
import { addPayment} from "../controllers/payment.js";

const router = express.Router();

router.get("/payments", addPayment);

export default router;
