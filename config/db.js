const { response } = require('express');
const r = require('rethinkdb')
require('dotenv').config();
let connection = r.connect({ host: process.env.HOST, port: process.env.PORT }, function(err, conn) {
  if(err) throw err;
    connection = conn;
    return conn;
  });


  //c.then(response => console.log("From db",response));
  

  module.exports = {connection, r};