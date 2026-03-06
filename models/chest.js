  const db = require("../db")
  
  const  Chest = db.model("Chest",{
     userID:{type: String, required: true},
      courses: { type: [String], default: [] }
  })
  module.exports  = Chest;