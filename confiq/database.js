const mongoose = require("mongoose");

require("dotenv").config()

exports.dbconnection =  async() => {
    mongoose.connect( process.env.MONGODB_URL||"mongodb+srv://mohitprajapati14101998:jyceMKFgn0sJ70fG@cluster0.0rm9olj.mongodb.net/Task_Sky_Goal", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(console.log("Db connection succesfully"))
        .catch((error) => {
            console.log("Db Facing connection isssuess")
            console.log(error)
            process.exit(1)
        })
}
//  const connection = async () => {
//     mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true

//     }).then(() => console.log("Dbconnection succesfully "))
//         .catch((error) => {
//             console.log("Databse connention Error")
//             console.error(error);
//             process.exit(1)

//         })
// }

// module.exports=connection();