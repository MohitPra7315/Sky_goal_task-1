const Course = require("../Models/Course")
const user = require("../Models/User")
const Tags = require("../Models/Category")
const { uploadImageCloudinary } = require("../Utils/imageUploder")

const cloudinary = require("cloudinary").v2



exports.CreateCourse = async (req, res) => {
    try {
        // fetch data from rerquest ki body
        const { courseName, courseDescription, price, whatYouWillLearn, tag, category} = req.body;

        // fetch the file frm req files body
        const thumnaileImg = req.files.thumnaileImg;
        if (!courseName || !courseDescription || !price || !whatYouWillLearn || !tag || !thumnaileImg||!category) {
            return res.status(400).json({
                success: false,
                message: "all required fill the fields"
            })
        }
        // check instructor
        const instructor = req.user.id;
        console.log("id of user", instructor)
        const instructorId = await user.findById({ _id: instructor });


        if (!instructorId) {
            return res.status(400).json({
                success: false,
                message: "user is not Instructor "
            })
        }
        // tage Id
        const tagId = await Tags.find({ tag });

        // data cloudinary url data
        const thumbnailImage = uploadImageCloudinary(thumnaileImg, process.env.FOLDER_NAME)

        // Create the Course schema
        const createCourse = await Course.create({
            courseName,
            courseDescription,
            price,
            instructor: instructorId._id,
            whatYouWillLearn: whatYouWillLearn,
            tag: tag,
            thumbnail: thumbnailImage.secure_url
        })
        console.log("create course", createCourse)
        // Update the user Dta a
        const updateUSer = await user.findByIdAndUpdate(
            { _id: instructorId._id },
            {
                $push: {
                    course: createCourse._id
                }
            },
            { new: true }
        )

        // Update the Tag 
        // HW

        return res.status(200).json({
            success: true,
            createCourse,
            updateUSer,
            message: "successfully data created in db"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while saving data in dB",
            error: error.message
        })
    }
}




// GetAll data 

exports.GetAllCourse = async (req, res) => {
    try {
        const allCourse = await Course.find({})
        return res.status(400).json({
            success: true,
            allCourse,
            message: "succcesfully data fetched"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while saving data in dB",
            error: error.message
        })
    }
}




exports.getCourseDetails = async (req, res) => {
    try {
        //get id
        const { courseId } = req.body;
        //find course details
        const courseDetails = await Course.find(
            { _id: courseId })
            .populate(
                {
                    path: "instructor",
                    populate: {
                        path: "additionalDetails"
                    },
                }
            )
            .populate("Category")


            .exec();
        console.log("working till there")

        //validation
        if (!courseDetails) {
            return res.status(400).json({
                success: false,
                message: `Could not find the course with ${courseId}`,
            });
        }
        //return response
        return res.status(200).json({
            success: true,
            message: "Course Details fetched successfully",
            data: courseDetails,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while saving data in dB",
            error: error.message
        })
    }
}