import express from "express";
import {likedHotels,getLikedHotels,cancelHotel} from '../controller/user.js';
const router = express.Router();
router.post("/liked",likedHotels);
router.get("/getUserHotel/:id",getLikedHotels);
router.post("/cancelLikedHotel",cancelHotel);

export default router;