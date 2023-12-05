const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    accountType: {
        type: String,
        enum: ["Admin", "Student", "Instructor"]
    },
    active: {
        type: Boolean,
        default: true
    },
    approved: {
        type: Boolean,
        default: true,
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile"

    },
    course: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Course"
        }
    ],
    image: {
        type: String,
        required: true
    },
  
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("User", UserSchema)