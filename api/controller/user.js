import Hotel from "../models/Hotel.js";
import User from "../models/User.js";


export const likedHotels = async(req,res)=>{
const hotel = req.body.hotelId;
const user = req.body.userId;
    try{
    const liked= await User.findByIdAndUpdate({_id:user},{$push:{
        likedhotel:hotel
    }
    });
       if(!liked) throw new Error("Unexpected Error");
       res.status(200).json("Add to Favorites");
}
catch(error)
{
res.status(400).json("Try again!");
}
}
export const getLikedHotels= async(req,res)=>{
    const user = req.params.id;
        try{
        const favoriteHotels= await User.find({_id:user}).select('likedhotel');
        const hotel = favoriteHotels.map(b=>b.likedhotel);
        const Hotels = await Hotel.find({_id:{$in:hotel[0]}});
        if(!Hotels) throw new Error("Unexpected Error");
         
         res.status(200).json(Hotels);
    }
    catch(error)
    {
    res.status(400).json("Try again!");
    }
}
export const cancelHotel = async(req,res)=>{
    const hotelid = req.body.hotelId;
    const userId = req.body.userId;
    try{
        const fidHotel= await User.findByIdAndUpdate({_id:userId},{$pull:{
            likedhotel:hotelid
        }});
       res.status(200).json("Hotel Removed")
    }
    catch(error)
    {
        res.status(400).json("Try again please");
    }
}