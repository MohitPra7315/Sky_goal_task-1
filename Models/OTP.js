const mongoose = require("mongoose")
const mailSender = require("../Utils/NodeAmiler")
const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60
    }
})

async function sendVerificationMail(email, otp) {
    try {
        console.log("this sendmaiol func", mailSender(), "to  mail:", email, "to :-", otp)
        const MailResponse = await mailSender(email, "Verification Email for StudyNaotion", otp)
        console.log("Email send succesfully", MailResponse.response)
    } catch (error) {
        console.log("error Occured while sending the Mail", error)
    }

}
OTPSchema.pre("save", async function (next) {
    // data yaha sa send kiya h otp or 
    console.log("New document saved to database");
    if (this.isNew) {
        await sendVerificationMail(this.email, this.otp)
    }
    next();
})




module.exports = mongoose.model("OTP", OTPSchema)