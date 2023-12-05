const express = require("express")
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const { Auth, isAdmin, isInstructor, isStudent } = require("../Middleware/AuthN_AothZ")




const {

    updateProfile,
    getAllUserDetails,
    Profileimage,

    deleteAccount
} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************


"http://localhost:7000/api/v1/profile/updateProfile"  //==>>>> 
// Updated  thier all user Not only for Student 
router.put("/updateProfile", Auth, updateProfile)


// // Delet User Account
router.delete("/deleteProfile", Auth, isStudent, deleteAccount)


// get user Full Details 
router.get("/getUserDetails", Auth, getAllUserDetails)



// Update Profile Image   Courses
router.put("/updateDisplayPicture", Auth, Profileimage) //these is for testing Auth middleware is working or not






module.exports = router