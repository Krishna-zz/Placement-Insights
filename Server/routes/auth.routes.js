const express = require('express');
const router = express.Router();
const User  = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);




router.post('/auth/register', async(req , res) => {

     const {name, email, password} = req.body

    let user = await User.findOne({email})
    if(user) return res.status(400).json({message:"User already Exists"})

    const hashedPassword = await bcrypt.hash(password, 10)

    user = new User({name , email, password:hashedPassword})
    await user.save()
})



router.post('/auth/login', async(req , res) => {

    const {email, password} = req.body

    const user = await User.findOne({ email })
    if(!user) return res.status(400).json({message:"User not found"})

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(400).json({message:"Invalid Credentials"})

    const token = jwt.sign({ id : user._id}, process.env.JWT_SECRET , {expiresIn: "1h"})

    res.json({message:"Login Successful", token})
})



router.post('/auth/google', async(req , res) => {
    
    const {token} = req.body;

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: "YOUR_GOOGLE_CLIENT_ID"
    })

    const payload = await ticket.getPayload()
    let user = await User.findOne({email: payload.email})

    if (!user) {
        user = new User({
            name: payload.name,
             email: payload.email,
             googleId: payload.sub,
             avatar: payload.picture
        })
        await user.save()
    }

    const jwtToken = jwt.sign({id:user._id}, "My_jwt_secret", {expiresIn:"1h"})
    res.json({message:"Google Login Successful", token:jwtToken})
})

