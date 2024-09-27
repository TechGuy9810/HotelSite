import express from "express";
import {createRoom,seeRoom
} from '../controller/room.js';
const router = express.Router();
router.get("/:id",seeRoom);
router.post("/",createRoom);
export default router;