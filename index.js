import express from "express"
import cors from "cors"
const app = express();

import {connectDB} from "./functions/mongoose.func.js"
import {getCurrentDateTime} from "./functions/moment.func.js"
import authRouter from "./routers/auth.routes.js"
import buyRouter from "./routers/buy.routes.js"
import cfg from "./cfg.js"


app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
  req.reqtime = getCurrentDateTime().toString();
  console.log(req.reqtime);
  next()
})

app.use('/v1/auth',authRouter)
app.use('/v1/buy',buyRouter)

app.use((req,res)=>{
  res.status(404).send("Not found here.")
})



app.listen(3000,async ()=>{
await connectDB();
  console.log('http://localhost:3000')
})