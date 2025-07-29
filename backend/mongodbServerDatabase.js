const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")

require("dotenv").config();

//Define Schema
const itemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model("item", itemSchema);

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors())
mongoose
  .connect("mongodb://localhost:27017/Items")
  .then(() => console.log("mongoose connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", error));


    //for inserting bulk data
    // const items = [];
    // for (let i = 1; i <= 130; i++) {
    // items.push({ name: `item${i}` });
    // }

    // Item.insertMany(items);
    // console.log("Inserted 130 items");

app.get("/items",async(req,res)=>{
  console.log("entered getitems");
  const page=parseInt(req.query.page)
  const limit=parseFloat(req.query.limit)
  const skip=(page-1)*limit
  try {
    const total=await Item.countDocuments();
    const items=await Item.find().skip(skip).limit(limit);
    console.log(items)
        res.json({
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      items,
    });
    
  } catch (error) {
    console.log("error",error)
    res.status(500).json({message:"server error"})

    
  }
   
})

    
app.listen(PORT, () => {
  console.log("server listening on PORT", PORT);
});
