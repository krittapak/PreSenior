const express =require('express')
const app = express();
const mysql = require('mysql');
const con = mysql.createConnection({
  host: "db-instance-seniorproject.ccb39twbmft8.us-east-2.rds.amazonaws.com",
  user: "seniorproject",
  password: "seniorproject",
  database: "mydb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

//? insert data to database
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

//?update data in database
con.connect(function(err){
    if(err) throw err
    console.log('connected!')
    var sql = "UPDATE customers set name ='Bright' where address ='Bangsaen'"
    con.query(sql,function(err){
        if(err)throw err
        console.log('Update complete')
    })
})

//?delete data in database
// con.connect(function(err){
//     if(err) throw err;
//     console.log('connected!')
//     var sql = "DELETE FROM customers where name = 'Company Inc' "
//     con.query(sql, function(err,result){
//         if(err) throw err
//         console.log('Delete complete')
//     })
// })

//------------------------------------------------
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//       res
//     });
//   });



//?create connection
// con.connect(function(err){
//     if (err) throw err 
//         console.log('connected!')
// })
 
//? show on web application
// con.connect()
// app.get('/users',(req,res) => {
//     let sql = 'SELECT * FROM customers'
//     let query = con.query(sql,(err,results)=>{
//         if(err) throw err 
//         console.log(results)
//         res.json(results)
//     })
// })
// app.listen('3000', ()=>{
//     console.log('start port 3000')
// })

