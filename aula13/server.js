const express = require("express");

const app = express();
/* app.get("/", (req,res) => {
    res.send(`
    <h1>Nossa home page</h1>
    <a href="/about">Sobre nos</a>
    <a href="/account">Sua conta</a>
    `)
})
app.get("/about", (req,res) => {
    res.send(`
    <h1>Sobre Nos: </h1>
    <a href="/">voltar</a>
    <a href="/account">Sua conta</a>
    `)
})
app.get("/account", (req,res) => {
    res.send(`
    <h1>Sua conta: </h1>
    <a href="/">voltar</a>
    <a href="/about">Sobre nos</a>
    ` )
})
app.get("/account/:nome/:idade", (req,res) => {
    res.send(req.params)
})
app.get("/cardapio/:almoco/:preco", (req,res)=> {
    res.send(req.params)
})

app.get("/carro/:marca/:modelo", (req,res) =>{
    res.send(`
    <h1> Essa é a marca do seu carro:</h1>
    <h2>${req.params.marca}</h2>`)
    
}) */
app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/index.html")
})
app.listen(5000, ()=>console.log("Server is listening on port 5000")) 