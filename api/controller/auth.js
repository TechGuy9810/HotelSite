import User from "../models/User.js";
import bcrypt from "bcryptjs";
import Token from "../models/token.js";
import crypto from 'crypto';
import mail from  '../utils/mail.js';
export const register =async (req,res)=>{
try{
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password,salt);
const newUser = new User({
    name:req.body.name,
    email:req.body.email,
    password:hash,
});
const existUsername = await User.findOne({ email: req.body.email});
if (existUsername) {
    throw new Error("User Already Exists!");
}
await newUser.save();
const token = new Token({
 userId:newUser._id,
 token:crypto.randomBytes(32).toString("hex")

});
await token.save();
const url = `Hi ${newUser.name}, hope you are well! you recently visited our website and entered your email.
Please follow the given link to verify your email :- ${process.env.BASE_URL}auth/${newUser._id}/verifyUser/${token.token}`;
await mail(newUser.email,"verify email",url);
res.status(200).json(newUser);
}
catch(err)
{
res.status(400).json({message:err.message});
}
}
export const login = async (req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email
        });
          if(!user)  throw new Error("User Not Found!");
          const pc = await bcrypt.compare(req.body.password,user.password);
          if(!pc) throw new Error("Incorrect Pssword!")
          
          if(user.verified===false){
            let token = await Token.findOne({userId:user._id});
            if(!token)
            {
                 const token = new Token({
                 userId:user._id,
                 token:crypto.randomBytes(32).toString("hex")
                
                });
                await token.save();
                const url = `Hi ${user.name}.Please follow the given link to verify your email :- ${process.env.BASE_URL}auth/${user._id}/verifyUser/${token.token}`;
                await mail(user.email,"verify email",url);
            }
            return res.status(400).json({message:"Please verify your email. A link is shared on registerd email."});
          }
          res.status(200).json(user);
        }
        catch(err)
        {
        res.status(401).json({message:err.message});
        }
};
export const logout = (req,res)=>{

};

export const verifyUser = async (req,res)=>{
    console.log(req.params.id);
try{
    const user = await User.findOne({_id:req.params.id});
    if(!user) return res.status(400).send({messages:"Invalid Link"});
    const token = await Token.findOne({
        userId:user._id,
        token:req.params.token
    });
    if(!token)return res.status(400).json({message:"invalid link"});
    await User.findByIdAndUpdate({_id:user._id},{verified:true});
    await Token.findByIdAndDelete(token._id);
    res.status(200).json(user);
}catch(error)
{
    res.status(400).json({message:"Email verfifcation Failed! Please Try Again"});
}
}