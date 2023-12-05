const Category = require("../Models/Category")
const Course = require("../Models/Course")

exports.CategoryCreate = async (req, res) => {
    try {

        const {userId}=req.user.id;
        console.log("user",userId)
        const { name, description } = req.body

        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: "please field the required daata"
            })
        }
        const savedCategory = await Category.create({
            name: name,
            description: description
        })

        res.status(200).json({
            success: true,
            post: savedCategory,
            message: "successfully data created category in Database"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}



// All TaGS

exports.showAllCategory = async (req, res) => {
    try {
        const Alldata = await Category.find({}, { name: true, description: true });

        res.status(200).json({
            success: true,
            Alldata,
            message: "successfully data created in Database"
        })
    } catch (error) {
        res.status(500).json({
            success: false,

            error: error.message
        })
    }
}



// we Controllers for category course and different a=couse and Top seling course


exports.CategoryPageCourse = async (req, res) => {
    try {
        // fetch Category Course ID 
        const { categoryID } = req.body;
        // validate the data 

        if (!categoryID) {
            return res.status(400).json({
                success: false,
                message: "send the catagory id"
            })
        }
        // 1 type category Course
        const CategoryCourses = await Category.findById({ categoryID }).populate("course").exec()
        // 2 Type different from category course

        const differentCourses = await Category.find({ _id: { $ne: categoryID } }).populate("Course").exec()

        // 3 Type top selling Course 
        // Home work 


        res.status(200).json({
            success: true,
            CategoryCourses: CategoryCourses,
            differentCourses: differentCourses,
            topSellingCourses: "pending for  write logic"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error occoured while fetching Category courses",
            error: error.message
        })
    }
}


exports.showAllCategory