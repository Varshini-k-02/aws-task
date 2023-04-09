const express = require("express");
const router = express.Router();
const { connection, db } = require("../config/db");

let emaill = {};
router.route("/").get((req,res)=>{
  res.render("index")
})
router.route("/allusers").post((req, res) => {
  connection();
  const {
    fname,
    lname,
    email,
    phno,
    dob,
    gender,
    add1,
    add2,
    city,
    state,
    code,
    country,
  } = req.body;
  emaill=email;
  console.log(req.body);
  db.query(
    "INSERT INTO formData(fname,lname,email,phno,dob,gender,add1,add2,city,state,code,country) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      fname,
      lname,
      email,
      phno,
      dob,
      gender,
      add1,
      add2,
      city,
      state,
      code,
      country,
    ],
    (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resp);
      }
    }
  );
});

router.route("/getusers").get((req, res) => {
  let pointer = emaill
  db.query('SELECT * FROM formData WHERE email = ?',[pointer], (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      const users = resp
      console.log(resp);
      res.render("users",{users}) //return
    }
  });
});
module.exports = router;
