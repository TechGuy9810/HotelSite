import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
export const seeHotel = async (req,res)=>{
try{
    const hotel = await Hotel.findById(req.params.id);
    if(!hotel) throw new Error("No Hotels");

    res.status(200).json(hotel);
}catch(err)
{
    res.status(500).json(err);
}
};
export const requestedHotel = async (req,res)=>{
    const city = req.query.city;
    const country = req.query.country;
    try{
        if(city=="Select")
        {
            throw new Error("Please select a destination");
        }
        const hotel = await Hotel.find({country:country,city:city});
        
        if(!hotel) throw new Error("No Hotel Found");

        res.status(200).json(hotel);
    }catch(err)
    {
        res.status(400).json({message:err.message});
    }
    };
export const featuredHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.find().limit(req.query.limit);
        if(!hotel) throw new Error("Error Loading Hotels!");

        res.status(200).json(hotel);
    }catch(err)
    {
        res.status(400).json({message:err.message});
    }
    };
    export const countryHotel = async (req,res)=>{
        try{
            const hotel = await Hotel.find({country:{$ne:"India"}}).limit(req.query.limit);

            if(!hotel) throw new Error("Error Loading Hotels!");

            res.status(200).json(hotel);
        }catch(err)
        {
            res.status(400).json({message:err.message});
        }
        };
export const seeAllHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.find();

        if(!hotel) throw new Error("Error Loading Hotels!");

        res.status(200).json(hotel);
    }catch(err)
    {
        res.status(400).json({message:err.message});
    }
    };

export const deleteHotel = async(req,res)=>{
    try{
       await Hotel.findByIdAndDelete(req.params.id);

       if(!Hotel) throw new Error("Error Deleting Hotels!");
    }
    catch(err)
    {
        res.status(400).json({message:err.message});
    }
}
export const  newHotel = async (req,res)=>{
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();

        if(!savedHotel) throw new Error("Error Creating Hotels!");
        res.status(200).json(savedHotel);
    }
    catch(err)
    {
        res.status(400).json({message:err.message});
    }
}
export const  updateHotel = async (req,res)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{ $set: req.body});

        if(!Hotel) throw new Error("Error Updating Hotels!");

        res.status(200).json(updatedHotel);
    }
    catch(err)
    {
        res.status(400).json({message:err.message});
    }
}


export const getHotelRoom = async(req,res)=>{
    try{
  const a = req.params.id;
  const Rooms = await Room.find({hotel:{a}});
  
  if(!Rooms) throw new Error("Error Finding Hotels!");
  
  res.status(200).json(Rooms)
    }
    catch(err){
      res.status(400).json({message:err.message});
    }  
  }