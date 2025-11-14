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

  // Fund function (ES6)
  async function fund(user) {
    const params = JSON.stringify( {
      metadata: {
        command: "fundOwbAccount",
        email: user.gmail,
        amount: user.amount // amount in naira
      },
      email: user.gmail,
      amount: user.amount * 100 // amount in kobo
    });

    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cfg.payKey}`,
        'Content-Type': 'application/json'
      }
    };
    let fundingRes;

    return new Promise((resolve, reject) => {
      const req = https.request(options, res => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            fundingRes = JSON.parse(data);
            console.log('Paystack response:', fundingRes);
            resolve(fundingRes);
          } catch (error) {
            reject(new Error(`Failed to parse response: ${error.message}`));
          }
        });
      });

      req.on('error', error => {
        console.error('Request error:', error);
        reject(error);
      });

      req.write(params);
      req.end();
    });

    console.log('Paystack had response:', fundingRes);
    /*
  //save Transaction locally
  await pendingTransaction
let payLoad = {
        transId: response.data.reference,
        status: "pending",
        action: "Bought Tokens",
        cost: price,
        balance: user.tokens,
        date: getDateOnly(),
        time: getTimeOnly()
      };
      //save it to user
      user.details.Transactions.unshift(payLoad);
      user.save();
*/
  }