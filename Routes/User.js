

const express = require("express");

const router = express.Router()


// / login ,signup data and Otp controllers
const { sendotp, SignUp, Login } = require("../controllers/Auth")
const { Auth } = require("../Middleware/AuthN_AothZ")
// user controllers
const { profile } = require("../controllers/Profile")


// Reset password controllers
const { ResetPasswordToken, ResetPassword } = require("../controllers/ResetPassword")




// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

//  ===>>> check Api from here ==>> http://localhost:7000/api/v1/auth/sendotp  
router.post("/sendOtp", sendotp)
router.post("/signup", SignUp)
router.post("/Login", Login)




    // ********************************************************************************************************
    //                                      Reset Password
    // ********************************************************************************************************


    // Route for generating a reset password token
 "http://localhost:7000/api/v1/profile/reset-password-token"  //    ===>>> check Api from this URl ==>>
router.post("/reset-password-token", ResetPasswordToken)

// Route for resetting user's password after verification
" http://localhost:7000/api/v1/profile/reset-password"    //  ===>>> check Api from here  URl ==>>
router.post("/reset-password", ResetPassword)



module.exports = router;


