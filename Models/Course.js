
const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,

    },
    courseDescription: {
        type: String
    },
    price: {
        type: Number
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    whatYouWillLearn: {
        type: String,

    },
 
  
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
  
  
    thumbnail: {
        type: String
    },
    instructions: {
        type: [String],
    },
    status: {
        type: String,
        enum: ["Draft", "Published"],
    },

})


module.exports = mongoose.model("Course", CourseSchema) 