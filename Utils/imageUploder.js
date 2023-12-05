
const cloudinary = require("cloudinary").v2


exports.uploadImageCloudinary = async (file, fileName, height, weight, quality) => {
    try {


        const options = { fileName }
        if (height) {
            options.height
        }
        if (weight) {
            options.weight
        }
        if (quality) {
            options.quality
        }
        options.resource_type = "auto"
     const info=   await cloudinary.uploader.upload(file.tempFilePath, options)
        console.log("succesfully image upload",info)
        return info
    } catch (error) {
        console.error(error)
    }
}