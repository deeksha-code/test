const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const mysql = require("mysql2/promise");
require("dotenv").config();



const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors())

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: process.env.DB_WAIT_FOR_CONNECTIONS === 'true',
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT),
  queueLimit: parseInt(process.env.DB_QUEUE_LIMIT)
});

// // Bulk insert (run once)
// async function insertItems() {
//   const connection = await pool.getConnection();
//   const items = [];
//   for (let i = 1; i <= 130; i++) {
//     items.push([`item${i}`]);
//   }
//   await connection.query("INSERT INTO items (name) VALUES ?", [items]);
//   console.log("Inserted 130 items");
//   connection.release();
// }

// insertItems()


// GET items with pagination
app.get("/items", async (req, res) => {
  console.log("Entered items module")
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const offset = (page - 1) * limit;

  try {
    const connection = await pool.getConnection();

    const [totalRows] = await connection.query("SELECT COUNT(*) as count FROM items");
    const totalItems = totalRows[0].count;

    const [rows] = await connection.query("SELECT * FROM items LIMIT ? OFFSET ?", [
      limit,
      offset,
    ]);
    console.log("rows",rows)

    res.json({
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems: totalItems,
      items: rows,
    });

    connection.release();
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ message: "Server error" });
  }
});

    
app.listen(PORT, () => {
  console.log("server listening on PORT", PORT);
});
