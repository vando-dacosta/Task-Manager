const express = require('express');
const { index, store, update, destroy } = require('../app/controller/TaskController');
const Routes = express.Router();

Routes.get("/", (req, res) => {
    index(res);
});

Routes.post("/", (req, res) =>{
    store(req, res);
})

 Routes.put("/", (req, res) =>{
     update(req, res);
 })

 Routes.delete("/", (req, res) =>{
    destroy(req, res);
 })



module.exports = Routes;