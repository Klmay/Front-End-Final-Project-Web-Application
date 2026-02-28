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



//this is to get everything form the datebase

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

// add class to the date base
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


//grab a single class from the database
router.get("/class/:id", async (req,res)=>{
    try{
      const oneclass = await Class.findById(req.params.id)
      res.json(oneclass)
    }
    catch(err){
        res.status(400).send(err)
    }
})

// Delete a class
router.delete("/class/:id", async (req, res) => {
    try {
        const oneclass = await Class.findById(req.params.id);
        if (!oneclass) {
            return res.status(404).send({ error: "Class not found" });
        }

        await Class.deleteOne({ _id: req.params.id });
        res.sendStatus(204); // No Content
    } catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
});


//update a class
router.put("/class/:id", async (req,res)=>{
    //first we need to find and update the class the front wants
    // we need a request the id of class form the request
    try{
         const oneclass = req.body
         await  Class.updateOne({_id :req.params.id},oneclass)
         console.log(oneclass)
         res.sendStatus(204)
    }
    catch(err){
        res.status(400).send(err)
    }
})