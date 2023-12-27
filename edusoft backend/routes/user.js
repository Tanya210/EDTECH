// require router for routes

const express = require("express");
const router = express.Router();
// const app = express();
// const cors = require('cors');
// app.use(cors());
// importing controllers
const {loginController} = require('../controllers/loginController');
const {SignUPController} = require('../controllers/SignUPController');

// importing middlewares for protected routes
// const {auth} = require("../middlewares/auth");

// // define API routes and  map routes witn controllers
router.post("/login" , loginController);
router.post("/signup" , SignUPController);
// // protected routes
// router.get("/authenticate" , auth , (req , res)=>{
//     res.status(200).json({
//         success:true,
//         message : "Welcome Again"
//     })
// })

// router.get("/passenger" , auth , isPassenger, (req , res)=>{
//     res.json({
//         success:true,
//         message : "welcome to protected route for passenger"
//     })
// })
// router.get("/admin" , auth , isAdmin, (req , res)=>{
//     res.json({
//         success:true,
//         message : "welcome to protected route for admin"
//     })
// })
module.exports = router;