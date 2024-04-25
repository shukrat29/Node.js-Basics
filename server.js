import express from "express";
const app = express();
import path from "path";
import fs from "fs";
import { error } from "console";

const __dirname = path.resolve();
console.log(__dirname);
const fn = "userList.csv";
app.use(express.urlencoded());

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const str = email + "," + password + "\n";
  //write inside the file
  fs.appendFile(fn, str, (error) => {
    console.log(error);
  });

  res.redirect("/login");
});

app.get("/register", (req, res) => {
  console.log(req.query);
  //   res.send(`
  //     <h1>Register Page</h1>
  //  `);

  res.sendFile(__dirname + "/public/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const loginDetails = email + "," + password;
  //read the file's data
  fs.readFile(fn, (error, data) => {
    const str = data.toString();

    if (str.includes(loginDetails)) {
      return res.send(`<h1 style="color:green">Login successfull!</h1>`);
    }
    res.send(`<h1 style="color:red">Login Failed!</h1>`);
  });
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
