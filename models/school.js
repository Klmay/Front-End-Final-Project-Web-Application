const db = require("../db")

const Class = db.model("Class",{
    Course: {type:String,required:true},
    teacher: {type:String,required:true},
    CreditHours:{type:Number,min:1,max:5},
    description: {type:String,required:true,maxlength: 1000}


})
module.exports  = Class;