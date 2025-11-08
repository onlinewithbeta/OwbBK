import {
  findUserById,
  pendTransaction,
  verifyTransaction
} from "../functions/mongoose.func.js";

import {
  findBundle,
  getNetworkId
} from "../functions/network.func.js";

import {
  sendData,
  sendAirtime
} from "../functions/buy.func.js";


export async function buyData(req, res) {
  try {
    let {
      network,
      phone,
      planId
    } = req.body;

    //find the user by id
    //return user
    const user = await findUserById(req.params.id);

    //respond on error
    if (!user) res.status(401).json({
      message: "You are not user"
    });

    //validate the payLoad
    //return payLoad or throw error
    //now middleware

    //find the bundle by ID
    //now middleware edle or throw error
    const bundle = findBundle(network, planId)


    //Debit in pending status and user, global
    //return tracking ID
    const minipayLoad = {
      bundle,
      phone
    };

    const transId = await pendTransaction(user.username, minipayLoad, "Data");

    //send the data
    //return res from provider.
    const transAction = await sendData(transId, bundle.networkId, bundle.id, phone);

    //verify if data was successful sent
    //record as successful
    await verifyTransaction(transAction, user.gmail, transId)

    //send message to user
    res.status(201).json({
      message: "Purchase successful",
      body: body
    })

  }catch(err) {
    console.log(err.message)
    res.status(500).json({
      message: "Something Went wrong"
    })
  }
}



export async function buyAirtime(req, res) {
  try {
    const {
      amount,
      network,
      phone
    } = req.body;

    //find the user by id
    //return user
    const user = await findUserById(req.params.id);
    //respond on error
    if (!user) res.status(401).json({
      message: "Please create an account or Sign into your account"
    });

    //validate the payLoad
    //return payLoad or throw error
    //now middleware

    //find the networkId by name
    //return the bundle or throw error
    const networkId = getNetworkId(network);


    const minipayLoad = {
      networkId,
      amount,
      network,
      phone
    };

    //Debit in pending status and user, global
    //return tracking ID
    const transId = await pendTransaction(user.gmail, minipayLoad, "Airtime");

    //send the data
    //return res from provider.
    const transAction = await sendAirtime(transId, networkId, amount, phone);

    //verify if data was successful sent
    //record as successful
    await verifyTransaction(transAction, user.gmail, transId)

    //send message to user
    res.status(201).json({
      message: `You successful bought ₦${amount} Airtime for ${phone}`
    })
  }catch(err) {
    res.status(500).json({
      message: "Something Went wrong"
    })
  }
}