const express = require("express");
const app = express()

const courseRoutes = require("./Routes/Course")
const userRoutes = require("./Routes/User")
const profileRoutes = require("./Routes/profile");


const cookieParse = require("cookie-parser")
const cors = require("cors")
const fileUploader = require("express-fileupload")
const dotenv = require("dotenv")

PORT = process.env.PORT || 5000;
app.use(fileUploader(
    {
        useTempFiles: true,
        tempFileDir: '/tmp/'
    }
))
app.use(cors())
app.use(cookieParse());
app.use(express.json())
app.use(express.json({ limit: '50mb' }));



const { Auth } = require("./Middleware/AuthN_AothZ")

require("./confiq/database").dbconnection();


require("./confiq/Cloudinary").cloudinaryConnect();


app.use("/api/v1/auth", userRoutes)
app.use("/api/v1/profile", profileRoutes)
app.use("/api/v1/course", courseRoutes)



const { ResetPasswordToken, ResetPassword } = require("./controllers/ResetPassword")
app.post("/api/v1/profile/reset-password-token", ResetPasswordToken)

app.post("/reset-password", ResetPassword)





app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "your server is up and Running......"
    })
})
app.listen(PORT, (req, res) => {
    return console.log(`app is working on port ${PORT}`)
})