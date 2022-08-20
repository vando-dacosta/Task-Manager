const { connection, r } = require("../../config/db");
const { responseModel } = require("../utils");

var index = (res) => {
    connection.then((connection) =>{
        r.table("tasks").eqJoin("devid", r.table("devs")).run(connection)
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
        r.table("tasks").insert({
            titulo: req.query.titulo, 
            descricao: req.query.descricao,
            datainicio: req.query.datainicio,
            datafim: req.query.datainicio,
            estado: req.query.estado??"por iniciar",
            devid: req.query.devid
        }).run(connection).then(response => res.send(responseModel(true, response)))
        .catch(error => res.send({status: false, data: error}));

    })
}

var update = (req, res) => {
    connection.then((connection) =>{
        r.table("tasks").filter(r.row("id").eq(req.query.id)).update({estado: req.query.estado}).run(connection).then(response => res.send(responseModel(true, response)))
    }).catch(error => res.send({status: false, data: error}));}


    var destroy = (req, res) => {
        connection.then((connection) =>{
            r.table("tasks").filter(r.row("id").eq(req.query.id)).delete().run(connection).then(response => res.send(responseModel(true, response)))
        }).catch(error => res.send(responseModel(false, error)));}



        module.exports = {index, store, update, destroy};