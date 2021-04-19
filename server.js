const express = require("express")
const sql = require('mssql/msnodesqlv8')

const app = express()
app.use(express.static('static'))
app.use(express.urlencoded());
app.use(express.json());
const port = 3000 // this is the port which the app will run on

app.post('/connect', (req, res) => {
        data = req.body
    
        var config = {
            user: data.user,
            password: data.password,
            server: data.server,
            database: data.database,
            port: parseInt( data.port ),
            options: {
                encrypt: true, // for azure
                trustServerCertificate: false // change to true for local dev / self-signed certs
              }
        };
        try{
        new sql.ConnectionPool(config,function (err, conn) {
            if(err) {
                console.log(err)
                res.status(404).send(err)
            }
            else{
            new sql.Request(conn).query(data.sql,function (err,recordset) {
                if(err) res.status(404).send(err)
                else{
                conn.close();
                return res.status(200).send(recordset);
                }
            })
            }
        });
    }catch(e){

        console.log(e)
        res.status(500).send("Sorry, Server Error")
    }
    })


app.listen(port, () => {
    console.log(`app started on port: ${port}`)
})