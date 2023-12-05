

const user = require("../Models/User")
const mailSender = require("../Utils/NodeAmiler")
const bcrypt = require("bcrypt")
const crypto = require("crypto")

exports.ResetPasswordToken = async (req, res) => {
    try {


        const { email } = req.body;

        const ValidUser = await user.findOne({ email: email })
        if (!ValidUser) {
            return res.json({
                success: false,
                message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,

            })
        }
        const token = crypto.randomBytes(20).toString("hex");

        const updateDetails = await user.findOneAndUpdate(
            { email: email },
            {
                token: token,
                resetPasswordExpires: Date.now() + 3600000,
            },
            { new: true }
        )
        // console.log("DETAILS", updateDetails);
        const url = `https://localhost:3000/Update-Password/${token}`

        await mailSender(
            email,
            "Password Link",
            `Your Link for email verification is ${url}. Please click this url to reset your password.`

        )


        return res.status(200).json({
            success: true,
            updateDetails,
            message: "succesfully mail sent,please check visit your mail to continue further"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Some Error in Sending the Reset Message"
        })
    }
}



// st2p 2 for check reset token 

exports.ResetPassword = async (req, res) => {
    try {
        console.log("start the reset password  ",);
        const { token, password, confirmPassword } = req.body;
        // validate password and confirmpassword
        if (password !== confirmPassword) {
            return res.json({
                success: false,
                message: "password is not  matching"
            })
        }

        const validToken = await user.findOne({ token: token })

        if (!validToken) {
            return res.json({
                success: false,
                message: "token is not valid"
            })
        }

        if (!(validToken.resetPasswordExpires > Date.now())) {
            return res.status(403).json({
                success: false,
                message: `Token is Expired, Please Regenerate Your Token`,
            });
        }
        console.log("working till there")
        const hashPassword = await bcrypt.hash(password, 10)

        const savedpassword = await user.findOneAndUpdate({ token: token }, {
            password: hashPassword,
            confirmPassword: confirmPassword

        },
            { new: true })

        console.log("data ", savedpassword)
        return res.json({
            success: true,
            savedpassword,
            message: "new password has been Updated in Db"
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: " error while Updated  new password  in Db"
        })
    }
}