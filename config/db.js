const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "bj08bzksufds3husmxxb-mysql.services.clever-cloud.com",
  database: "bj08bzksufds3husmxxb",
  user: "uhtnsayvnhod8l70",
  password: "",
  port: 3306,
});
const connection = () => {
  db.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("CONNECTED");
    }
  });
};

module.exports = { db, connection };
