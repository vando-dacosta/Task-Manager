const { connection, r } = require("../../config/db");
const { responseModel } = require("../utils");

var index = (res) => {
    connection.then((connection) =>{
        r.table("devs").run(connection)
        .then(cursor => cursor.toArray())
        .then(data => res.send(responseModel(true, data)))
        .catch((error) => {
            console.log(error)
            res.send(null);
        })
        
    })
};

var store = (req, res) => {
    connection.then((connection)=>{
        r.table("devs").insert({
            name: req.query.name, 
            email: req.query.email,
            phone: req.query.phone,
            createdAt: new Date()
        }).run(connection).then(response => res.send(responseModel(true, response)))
        .catch(error => res.send({status: false, data: error}));

    })
}

var update = (req, res) => {
    connection.then((connection) =>{
        r.table("devs").filter(r.row("id").eq(req.query.id)).update({email: req.query.email}).run(connection).then(response => res.send(responseModel(true, response)))
    }).catch(error => res.send({status: false, data: error}));}


    var destroy = (req, res) => {
        connection.then((connection) =>{
            r.table("devs").filter(r.row("id").eq(req.query.id)).delete().run(connection).then(response => res.send(responseModel(true, response)))
        }).catch(error => res.send(responseModel(true, data)));}


        // Criar um filtro de pesquisa de nomes
        
    
module.exports = {index, store, update, destroy};