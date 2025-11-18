import dotenv from "dotenv"
dotenv.config()

 const cfg = {
   URL:process.env.URL,
   payKey:process.env.PAYKEY,
   ACT:process.env.ACT,
   DB_URL:process.env.DB_URL,
   GMAILPASS:process.env.GMAILPASS,
   saltRounds:process.env.SALTROUNDS,
   
 };
 
 export default cfg ;