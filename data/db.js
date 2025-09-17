//importo mysql2
const mysql = require("mysql2");

//creo la connessione al db
const connection = mysql.createConnection({

  host:"localhost",
  user: "root",
  password:"root",
  database:"db-posts"

});

//instauro una connessione al database
connection.connect((err) =>{
  if(err){
    console.log(err);
  }
  else{
    console.log("connected to mysql");
  }
});

//esportiamo la connessione creatan

module.exports = connection;