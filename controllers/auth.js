const mysql = require("mysql");
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req,res) =>{
    console.log(req.body);
    
  
     const {fname,lname,phone,email,addres} = req.body;
     
     db.query('INSERT INTO user SET ?', {fname: fname, lname: lname, phone: phone, email: email, addres: addres},(error, results) =>{
       if(error){
           console.log(error);
       } else {
           console.log(results);
           return res.render('forms',{
               message:'Comanda înregistrată cu succes',
           });
       }  
     } )

}

exports.registerpizza = (req,res) =>{
    console.log(req.body);
    
  
     const {blat,cascaval,carne,legume, mess} = req.body;
     
     db.query('INSERT INTO pizza SET ?', {blat: blat, cascaval: cascaval, carne: carne, legume: legume, mess:mess},(error, results) =>{
       if(error){
           console.log(error);
       } else {
           console.log(results);
           return res.render('forms',{
               message:'Introduceti datele personale',
           });
       }  
     } )

}