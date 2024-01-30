import express from "express";

const app = express();

const alunos = [
    {id: 1, name: "Pedro"},
    {id: 2, name: "Tomaz"},
    {id: 3, name: "Lucas"},
];

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.status(200).send(`Teste`)
});

// Visualizar todos os usuarios usando GET
app.get("/alunos", (req, res) => {
    if(!alunos){
        res.status(400).json({message: "Não foi encontrado nenhum aluno"});
    }else{
        res.status(200).json(alunos);
    } 
});

//Adicionar usuario usando POST

app.post("/alunos", (req, res) => {
    const aluno = {
        id: parseInt(req.body.id),
        nome: req.body.nome
    };
    if(!aluno.id || !aluno.nome){
        res.status(400);
        res.json({message: "Informação invalida, adicione um nome e um a id"})
    } else{
        res.status(201);
        alunos.push(aluno);
        res.json({message: `${aluno.nome} foi adicionado`});
    }
    
});

// Deletar usuario usando DELETE
app.delete("/alunos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findId = alunos.findIndex(element => element.id === id);
    if(findId === -1){
        res.status(404).json({message: "Aluno não foi encontrado"});
    } else{
        alunos.splice(findId, 1);
        res.status(202).json({message: `O aluno de id ${req.params.id} foi removido`})
    }
});

app.put("alunos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findAlunos = alunos.find(element => element.id === id);
    if(!findAlunos){
        
    }
})

export default app;