import express from "express";
import {isRoomAvailable,book,userBookings,cancelBook} from '../controller/booking.js';

const router = express.Router();
router.post("/book",book);
router.post("/avail",isRoomAvailable);
router.post("/cancelBooking",cancelBook);
router.get("/getBooking/:id",userBookings);
export default router;