import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import Booking from "../models/Booking.js";



export const createRoom = async (req,res)=>{
    const newRoom = new Room(req.body);
    try{
        const savedRoom = await newRoom.save();
        res.status(200).json(savedRoom);
    }catch(err)
    {
        res.status(400).json({message:err.message});
    }
    };

    export const seeRoom = async (req,res)=>{
        try{
            const room = await Room.findById(req.query.id);
    
            if(!room) throw new Error("Please Select Hotel!");
    
            res.status(200).json(room);
        }catch(err)
        {
            res.status(500).json({message:err.message});
        }
        };
