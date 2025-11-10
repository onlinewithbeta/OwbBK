import {
  Router
} from 'express'
import {
  buyData,
  buyAirtime
} from '../controllers/buy.controllers.js'
import {
  buyAirtimeValidator,
  buyDataValidator,
  handleValidation
} from '../functions/validator.func.js'
import {
apikeyMiddleware
} from "../middleware/token.middleware.js"
  


const buyRouter = Router();

buyRouter.get("/", (req, res)=> {
  res.status(200).json({message:"welcome to purchase Route"})
})

buyRouter.post("/data", buyDataValidator, handleValidation,apikeyMiddleware, buyData);

buyRouter.post("/airtime", buyAirtimeValidator, handleValidation, apikeyMiddleware,buyAirtime);


export default buyRouter;