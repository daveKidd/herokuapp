const dotenv = require("dotenv").config();
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use("/api/*",(_,res)=>{
    res.json(
        {
            "people": [
                {
                "craft": "ISS",
                "name": "Mark Vande Hei"
                },
                {
                "craft": "ISS",
                "name": "Pyotr Dubrov"
                },
                {
                "craft": "ISS",
                "name": "Anton Shkaplerov"
                },
                {
                "craft": "Shenzhou 13",
                "name": "Zhai Zhigang"
                },
                {
                "craft": "Shenzhou 13",
                "name": "Wang Yaping"
                },
                {
                "craft": "Shenzhou 13",
                "name": "Ye Guangfu"
                },
                {
                "craft": "ISS",
                "name": "Raja Chari"
                },
                {
                "craft": "ISS",
                "name": "Tom Marshburn"
                },
                {
                "craft": "ISS",
                "name": "Kayla Barron"
                },
                {
                "craft": "ISS",
                "name": "Matthias Maurer"
                }
            ],
            "message": "success",
            "number": 10
        })
    })

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})


// console.log("Its alive!!!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.APIKEY)
// console.log(process.env.DBPASS)
// console.log(process.env.PORT)

//apicall.com?apikey=process.env.APIKEY