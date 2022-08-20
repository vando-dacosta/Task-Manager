const express = require('express')
const DevRoutes = require('./route/DevRoutes')
const TaskRoutes = require('./route/TaskRoutes')
const app = express()
const port = 4000


app.use("/devs", DevRoutes);
app.use("/tasks", TaskRoutes);

/*
app.get('/', (req, res) => {
    connection.then((connection) => {
        r.table('person').filter(r.row("localizacao").match("^Moz")).limit(3).run(connection, (error, cursor) => {
            if(error) throw error;
            cursor.toArray((error, results)=> {
                if(error) throw error;
                res.send(results);
            })
        })


    }) .catch(error => res.send("ERROR de Conexao"))
})
*/

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})