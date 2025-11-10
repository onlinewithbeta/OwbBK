import mongoose from "mongoose"


import User from "../models/user.models.js";
import {
  describeTransaction,
} from "../functions/description.func.js";
import {
  getCost,
} from "../functions/transaction.func.js";
import {
  getCurrentDateTime,
  getDifferenceInMinutesS
} from "../functions/moment.func.js";

import {
  randomDigits,
} from "../functions/generate.func.js";
import cfg from '../cfg.js'

const DB_URL = cfg.DB_URL;

export async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("successful to connection");

  }catch(err) {
    console.log("Failed to connect" + err);
  }
}

export function getMongoId(item) {
  return item.toString();
}

export async function saveUser(obj) {
  try {
    //  throw new Error("the username is already taken")
    const newUser = new User(obj);
    await newUser.save();

    console.log(newUser)

  }catch(err) {
    throw new Error(`Could not create account because ${err.message}`)
  }
}


export async function findUserByAccessKey(key) {

  try {
    const user = await User.find({
      accessToken: key
    })
    if (user.length < 1) {
      console.log(user.length)
      //multiple users have the accessToken
      throw new Error("Conflict in Access tokens")
    }

    return user[0];
  }catch(err) {
    throw new Error(err.message)
  }
}

export function findUserById(id) {
  return {
    username: "owb",
    balance: 300,
    gmail: "user@gmail.com"
  }
}

export async function pendTransaction(user, miniPayload, kind) {
  //description of transaction
  let description = describeTransaction(miniPayload, kind);

  //cost of transaction
  let cost = getCost(kind, miniPayload);;

  const id = `${kind}_${randomDigits(11)}`;

  const transaction = {
    date: {
      start: Date(),
      verified: null
    },
    type: kind,
    cost,
    description,
    status: "pending",
    old_balance: user.balance,
    id: id,
    new_balance: user.balance-cost,
  };
  //  console.log(user)
  //debit and record on user Object
  user.balance = user.balance-cost;
  user.transactions.unshift(transaction)
  await user.save();
  //record globally

  console.log("transactions Saved as pending")

  let _id = user.transactions[0]._id;

  _id = getMongoId(_id);

  return {
    transId: `${id}`,
    _id,
    user
  }

}

export async function verifyTransaction(transactionRes, user, ref) {
  user = await User.findOne({
    gmail: user.gmail
  });
  let index = getTransactionIndex(user.transactions, ref);
  if (transactionRes.status === "success") {
    user.transactions[index].status = "success";
  } else {
    user.transactions[index].status = "failed";
    console.log(user.balance)
    user.balance = user.transactions[index].old_balance;
    console.log(user.balance)
  }

  user.transactions[index].date.verified = getCurrentDateTime();
  console.log("verified")
  //  console.log(user)
  await user.save();

  if (transactionRes.status !== "success") {
    console.log(transactionRes)
    throw new Error("Transaction failed. Your money has been refunded.");
  } else {
    console.log(`successful Purchase : ${user.transactions[index].description}`)

  }

}




function getTransactionIndex(transactions, ref) {
  for (let i = 0; i < transactions.length; i++) {
    let _id = getMongoId(transactions[i]._id);
    if (_id === ref._id) {
      console.log("Found our transaction")
      return i
    }
  }
  console.log(404)
}