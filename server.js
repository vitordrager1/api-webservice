const express = require('express'); // O EXPRESS É UTILIZADO PARA SUBIR E MANTER UM SERVIDOR WEB NO AR, RECEBER REQUISIÇÕES E RETORNA-LAS AO SOLICITANTE
const cors = require('cors');// UTILIZADO PARA PROVER MIDDLEWARE PARA O EXPRESS E HABILITAR O CORS COM VARIAS OPÇÕES
const db = require("./app/models")
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extend: true }))
//sincronizar o banco
db.sequelize.sync()
.then(() => {
    console.log("Synced db.");
})
.catch((err) => {
    console.log("Failed to sync db: " + err.message);
});
// reiniar o banco!
// db.sequelize.sync({ force: true }).then(() => {
//         console.log("Drop and re-sync db.");
//       });
    
    
    
//rota
//DEFINIDA A PRIMEIRA ROTA



app.get("/", (req,res) => {
    res.json({message: "BEM VINDO A DRAGER API."})
})

require("./app/routes/tutorial.routes")(app);
//CONFIGURADO A PORTA E O LISTEN
const PORT = process.env.PORT || 8080;



app.listen(PORT, () => {
    console.log (`SERVIDOR RODANDO NA PORTA ${PORT}.`)
})

//RODAR O API COM O COMANDO SERVER.JS, NO LOCALHOST 8080 DEVERA APARECER A MENSAGEM DO LSITEN