const nodemailer = require("nodemailer")
require("dotenv").config()
const mailSender = async (email, title, body) => {
    try {

        const transporter = nodemailer.createTransport({
            host: process.env.Mail_host,
            auth: {
                user: process.env.Mail_User,
                pass: process.env.Mail_Pass
            }
        })

        let info = await transporter.sendMail({
            from: 'StudyNotion || CodeHelp - by Babbar',
            to:`${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log("tranporter initiall a Info ", info)
        return info
    } catch (error) {
        console.log(error.message)
    }

}
module.exports = mailSender