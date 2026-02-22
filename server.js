const express = require("express")
var cors = require('cors');
const Class = require("./models/school");
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();
app.use("/api",router);
app.listen(3000);
console.log("works")
//start the server



//this is to get everything form the database

router.get("/class",async(req,res)=>{
    try{
const course = await Class.find({})
 res.send(course)
    console.log(course)
    }
    catch(err){
console.log(err)
    }

})

// add class to the database
    router.post("/class", async(req,res)=>{
    try{
        const newClass =  await new Class(req.body)
        await newClass.save()
        res.status(201).json(newClass)
        console.log(newClass)
    }
    catch(err){
        req.status(400).send(err)

    }
})
