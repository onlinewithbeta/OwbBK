import {
  Router
} from 'express';

import {
  amountValidator,
  handleValidation
} from '../functions/validator.func.js';

import {
  apikeyMiddleware
} from "../middleware/token.middleware.js"
import {
  fundAccount
} from '../controllers/fund.controllers.js'

const fundRouter = Router();

fundRouter.post("/",apikeyMiddleware, amountValidator, handleValidation, fundAccount);


export default fundRouter;
