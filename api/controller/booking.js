
import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
export const book = async(req,res)=>{
const newBooking  = new Booking(req.body);
     try{
        const savedBooking = await newBooking.save();
       if(!savedBooking) throw new Error("Booking Failed");
      res.status(200).json(savedBooking);
     }
     catch(error)
     {
        res.status(500).json({message:error.data});
     }
}
export const userBookings = async(req,res)=>{
    const userId = req.params.id;
        try{
         const bookings = await Booking.find({user:userId}).populate('room','roomNumber').exec();
         if(!bookings) res.status(200).json("No Bookings Yet");

         res.status(200).json(bookings);
        }
        catch(error)
        {
            res.status(500).json({message:"Refresh!"});
        }
    }

export const cancelBook = async(req,res)=>{
        const cancelId = req.body.bookingId;
            try{
             const cancelled = await Booking.findByIdAndDelete({_id:cancelId});
             if(!cancelled) res.status(200).json("Cancelation UnSuccessfull");
    
             res.status(200).json("Cancelation Successfull");
            }
            catch(error)
            {
                res.status(500).json({message:"Refresh!"});
            }
}

export const isRoomAvailable = async(req,res)=>{
 const from_date = req.body.from_date;
 const id = req.body.hotelid;
 const to_date = req.body.to_date;
    try{
      const bookings = await Booking
      .find({
          $or: [
              { start: { $gte: from_date, $lte: to_date } },
              {
                  end: { $gte: from_date, $lte: to_date }
              },
              {
                  $and: [{ start: { $lte: from_date } }, { end: { $gte: to_date } }]
              },
          ],
      }).select('room');


      const roomIds = bookings.map(b => b.room);
      const availableRooms = await Room.find({hotel:id, _id: { $nin: roomIds } });
      res.status(200).json(availableRooms);
    }
    catch(err)
    {
        res.status(500).json({message:"Cant Find Any Rooms"});
    }
}