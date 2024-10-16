require('dotenv').config();
const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000

app.use(cors()); 
app.use(bodyParser.json());
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'assignment_7'
})

connection.connect();

app.post('/register', async (req, res) => {
  const {email, phone, password} = req.body;
  console.log("got request");
  try {
    connection.query("INSERT INTO users (email, phone, password_hash) VALUES (?, ?, ?)", [email, phone, password],
      function (err, results, fields) {
        if (err) {
          res.send(err.sqlMessage);
          return;
        } else {
          console.log("values inserted");
          res.send("Successful");
          return;
        }
      }
    );
  }
  catch(err) {
    console.log("Database error");
    res.send(err);
  }
})

app.post('/login', async (req, res) => {
  const {email, password} = req.body;
  console.log(email);
  try {
    connection.query("SELECT * FROM users WHERE email = ?", [email], 
      function(err, results, fields) {
        console.log(results);
        if(err) {
          console.log("Error in database: ", err);
          res.send("Database error");
          return;
        }
        if(results.length == 0) {
          console.log("user isn't registered");
          res.send("user isn't registered");
          return;
        }
        if(results[0].password_hash == password) {
          console.log("Logged in");
          res.send("Successful");
          return;
        } else {
          console.log("Incorrect password");
          res.send("Wrong password");
          return;
        }
      }
    );
  }
  catch(err) {
    console.log("Database error");
    res.send("Database error");
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})