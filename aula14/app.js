const express = require("express")
const alunos = require("./alunos")

const app = express()

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/alunos", (req,res) => {
    res.json(alunos)
})
app.get("/alunos/:id", (req,res) => {
    let indice = req.params.id;
    return res.json(alunos[indice])

})

app.use(express.urlencoded({ extended: true}))

//Metodo Post
app.post("/alunos", (req, res) =>{
    let name = req.body.name
    alunos[alunos.length] = name;
    return res.json(alunos[(alunos.length - 1 )])
})
//Metodo Put 
app.put("/alunos/update/:id", (req, res) =>{
    let nome = req.body.name;
    alunos[req.params.id] = nome;
    return res.json(alunos[req.params.id])
})
//Metodo Delete
app.delete("/alunos/delete/:id", (req, res) =>{
    alunos.splice(req.params.id,1)
    return res.json(alunos[req.params.id])
})

app.listen(5000, ()=> console.log("Listening on port 5000..."))