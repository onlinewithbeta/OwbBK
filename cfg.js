import dotenv from "dotenv"
dotenv.config()

 const cfg = {
   URL:process.env.URL,
   ACT:process.env.ACT,
   DB_URL:process.env.DB_URL,
   saltRounds:process.env.SALTROUNDS,
   
 };
 
 export default cfg ;