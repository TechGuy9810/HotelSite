import nodemailer from "nodemailer";
export const mail = async (email,subject,test)=>{
    
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.service,
            port:process.env.EMAIL_PORT,
            secure:Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            }
        });
        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:subject,
            text:test
        });
    }catch(error)
    {
console.log("email not sent")
console.log(error);
    }
};
export default mail;