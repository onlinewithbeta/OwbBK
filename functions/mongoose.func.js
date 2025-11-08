import mongoose from "mongoose"


import User from "../models/user.models.js";
import {
  describeTransaction,
} from "../functions/description.func.js";

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






export function findUserById(id) {
  return {
    username: "owb",
    balance: 300,
    gmail: "user@gmail.com"
  }
}

export async function pendTransaction(username, miniPayload, kind) {

  let descrition = describeTransaction(username, miniPayload, kind);

  return randomDigits(11)
}

export function verifyTransaction(id) {}

export function createUser(id) {}