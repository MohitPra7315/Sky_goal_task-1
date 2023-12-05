const jwt = require("jsonwebtoken")

require("dotenv").config()
// Auth 
exports.Auth = async (req, res, next) => {
    try {

        console.log("cookie" + req.cookies.token)
        const token = req.cookies.token || req.body.token || req.header("Authorisation").replace("Berear ", "")
        // console.log("token value", token)

        if (!token) {
            return res.json({
                success: false,
                message: "token is invalid"
            })
        }

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET)
            // console.log(payload)
            req.user = payload;

            // console.log(payload,"payload for reqbody")
        } catch (error) {
            return res.status(401).json({
                success: false,
                Message: "token is in valid"

            })
        }
        console.log("Next step")
        next();

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error while verifying the token",
            error: error.message
        })
    }
}


// isStudent
exports.isStudent = async (req, res, next) => {
    try {
        if (req.user.accountType !== "student") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for student only',
            });
        }
        next();

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error while the Authization "
        })
    }
}


// isAdmin

exports.isAdmin = async (req, res, next) => {
    try {
        console.log("mil gya Admin", req.user)
        if (req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Admin only',
            });
        }
        next();

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error while the Authization "
        })
    }
}


// Instructor
exports.isInstructor = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for instructor only',
            });
        }
        next();

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error while the Authization "
        })
    }
}
