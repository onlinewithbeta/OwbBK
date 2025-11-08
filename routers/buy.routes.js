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



const buyRouter = Router();

buyRouter.get("/", (req, res)=> {
  res.status(200).json({message:"welcome to purchase Route"})
})

buyRouter.post("/:id/data", buyDataValidator, handleValidation, buyData);

buyRouter.post("/:id/airtime", buyAirtimeValidator, handleValidation, buyAirtime);


export default buyRouter;