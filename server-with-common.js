const express = require("express");
const app = express();
const path = require("path");

console.log(__dirname);

app.use(express.urlencoded());

app.post("/register", (req, res) => {
  console.log(req.body);

  res.send("Data received");
});

app.get("/register", (req, res) => {
  console.log(req.query);
  //   res.send(`
  //     <h1>Register Page</h1>
  //  `);

  res.sendFile(__dirname + "/public/register.html");
});

app.get("/", (req, res) => {
  //   console.log("server reveived the request");

  //   res.send(`
  //   <h1>Home Page</h1>
  // <a href="/register">
  //     <button>Register</button>
  // </a>
  // <a href="/login">
  //     <button>Login</button>
  // </a>`);

  res.sendFile(__dirname + "/public/index.html");
});

app.listen(8000, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is running at http://localhost:8000`);
});
