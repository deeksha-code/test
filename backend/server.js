// =============Mongodb Database==================
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




















//============================ SQL DATABASE====================================
// const express = require("express");
// const mongoose = require("mongoose");
// const cors=require("cors")
// const mysql = require("mysql2/promise");
// require("dotenv").config();



// const PORT = process.env.PORT || 5000;
// const app = express();
// app.use(express.json());
// app.use(cors())

// // MySQL Connection Pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: process.env.DB_WAIT_FOR_CONNECTIONS === 'true',
//   connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT),
//   queueLimit: parseInt(process.env.DB_QUEUE_LIMIT)
// });

// // // Bulk insert (run once)
// // async function insertItems() {
// //   const connection = await pool.getConnection();
// //   const items = [];
// //   for (let i = 1; i <= 130; i++) {
// //     items.push([`item${i}`]);
// //   }
// //   await connection.query("INSERT INTO items (name) VALUES ?", [items]);
// //   console.log("Inserted 130 items");
// //   connection.release();
// // }

// // insertItems()


// // GET items with pagination
// app.get("/items", async (req, res) => {
//   console.log("Entered items module")
//   const page = parseInt(req.query.page);
//   const limit = parseInt(req.query.limit);
//   const offset = (page - 1) * limit;

//   try {
//     const connection = await pool.getConnection();

//     const [totalRows] = await connection.query("SELECT COUNT(*) as count FROM items");
//     const totalItems = totalRows[0].count;

//     const [rows] = await connection.query("SELECT * FROM items LIMIT ? OFFSET ?", [
//       limit,
//       offset,
//     ]);
//     console.log("rows",rows)

//     res.json({
//       currentPage: page,
//       totalPages: Math.ceil(totalItems / limit),
//       totalItems: totalItems,
//       items: rows,
//     });

//     connection.release();
//   } catch (err) {
//     console.error("Error fetching items:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

    
// app.listen(PORT, () => {
//   console.log("server listening on PORT", PORT);
// });
