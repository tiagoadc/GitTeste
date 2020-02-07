const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.status(200).send({message: 'Olá Mundo estou funcionando'});
})
app.get('/ola', (req, res) => {
     res.status(200).send({message: 'Eu sou a rota ola'});
})

app.listen(3001, ()=> {
    console.log('API rodando na porta 3001');

})
