import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
import filmes from "./Filmes.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

app.get("/", (req, res) => {
    //res.sendFile(__dirname + "/public/index.html");
    res.end(`
    <h1>Lista de Filmes</h1>
    <a href="/filmes">Filmes</a>
    `)
})

//Get -- Consultar Filmes
app.get("/filmes", (req,res) => res.json(filmes))

app.get("/filmes/:id", (req,res) => {
    let paramsId = parseInt(req.params.id)
    let id = indice(filmes, paramsId)
    if(isNaN(id)){
        res.end(`
        <h1>Erro</h1>
        ${id}</br>
        <a href="/">Voltar Para a lista de Filmes</a>
        `)
    } else{
        res.json(filmes[id]);
    }   
})
function indice(array, id){
    let index = array.findIndex(item => item.id === id);
    if(index !== -1){
        return index
    }else {
        return `Erro ID: ${id} invalido`
    }
}

//Body Parse IMPORTATNT !!!
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//Post -- Adicionar Filmes
app.post("/filmes/adicionar", (req,res) =>{
    const novoID = criarNovoID(filmes)
    const novoFilme = {
        id: novoID,
        nome: req.body.nome,
        ano: req.body.ano,
        genero: req.body.genero
    }
    if(!novoFilme.nome||!novoFilme.ano||!novoFilme.genero){
        return res.json({msg: "Por favor insira o nome, ano e genero do filme"})
    }
    filmes.push(novoFilme);
    res.json(novoFilme);
    
})
function criarNovoID(array){
    const todosId = array.map(item => item.id);
    let lastId = 0;
    todosId.forEach((id) => {
        if(id > lastId){
            lastId = id
        }
    })
    return lastId + 1
}

//Put -- Atualizar Filmes
app.put("/filmes/atualizar/:id", (req,res) => {
    let paramsId = parseInt(req.params.id)
    let id = indice(filmes, paramsId)
    if(isNaN(id)){
        return res.end(`
        <h1>Erro</h1>
        ${id}</br>
        <a href="/">Voltar Para a lista de Filmes</a>
        `)
    }
    filmes[id].nome = req.body.nome;
    filmes[id].ano = req.body.ano;
    filmes[id].genero = req.body.genero; 
    res.json(filmes[id])
})



app.listen(5000, ()=>console.log("Listening on port: 5000 ..."))