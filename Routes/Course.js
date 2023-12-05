const express = require("express")

const router = express.Router();

// console.log(route, "course routes")

// Authantigation and authorization controllers
const { Auth, isAdmin, isInstructor, isStudent } = require("../Middleware/AuthN_AothZ")

// course controllers
const {
    GetAllCourse,
    CreateCourse,
    getCourseDetails
} = require("../controllers/Course")



// category controllers
const { CategoryCreate,
    showAllCategory,
    CategoryPageCourse
} = require("../controllers/Category")



// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

console.log(router, "course routes")
router.get("/", async () => {
})
router.post('/createCourse', Auth, isInstructor, CreateCourse)
router.get('/getAllCourse', GetAllCourse)
router.post('/getCourseDetails', getCourseDetails)




// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here

router.post('/createCategory', Auth, isAdmin, CategoryCreate)
router.get('/showAllCategories', showAllCategory)
router.post('/getCategoryPageDetails', CategoryPageCourse)


// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************



module.exports = router