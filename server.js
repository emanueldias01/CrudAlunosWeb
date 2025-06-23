import express from 'express'
import alunosRoutes from './src/routes/route.js';

const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

app.use(express.json())
app.use(alunosRoutes)


app.listen(3000, () => {
    console.log(`rodando na porta 3000`)
})