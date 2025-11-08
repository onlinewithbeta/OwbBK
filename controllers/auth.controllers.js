

import {createUser} from "../functions/user.func.js";
import {saveUser} from "../functions/mongoose.func.js";


//functions for auth.
export async function signUp(req, res) {
  try {
    //create user Object
    const userObj = await createUser(req.body)

    //try to save it
    console.log(userObj)
   await saveUser(userObj);

    res.status(201).json({
      message: "Your account has successfully been created",
      user:userObj
    })
    //try save catch
  }catch(err) {
    //response
    console.log(err)
    res.status(500).json({
      message: err.message || "Something went wrong. Please try again"
    })
  }

}


export async function signIn(req, res) {
  try{
  //find and compare

  //send access token and balance
  console.log(req.body)
  res.status(200).json(req.body)
  }catch(err){
    //response
    res.status(err.statusCode ||500).json({
      message: "Something went wrong. Please try again"
    })
  }
}



export async function signOut(rrq, res) {
  //validate
  //find by id
  //record signout
  //reply
  console.log(req.body)
  res.status(200).json(req.body)
}

export async function requestOtp(req, res) {
  //validate
  //find gmail
  //send otp
  //reply
  console.log(req.body)
  //req.cookies(777)
  res.status(200).json(req.body)
}

export async function changePassword(req, res) {
  //validate
  //find and match otp
  //changePassword
  //reply
  console.log(req.body)
  res.status(200).json(req.body)
}