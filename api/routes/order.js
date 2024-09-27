import express from "express";
import {ConfirmOrder,payment} from '../controller/order.js';
const router = express.Router();
router.post("/order",ConfirmOrder);
router.post("/payment",payment);

export default router;