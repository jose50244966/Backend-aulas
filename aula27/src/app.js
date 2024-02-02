import express from "express";
import Aluno from "./alunoModel.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", (req, res) => {
    res.status(200).send(`<h1>Home Page</h1>`)
});


// Pesquisando ALuno com GET
app.get("/aluno", async(req, res) => {
    const alunos = await Aluno.find({});
    if(alunos){
        res.status(200).json(alunos)
    }else{
        res.status(404).json({message: "Não foi encontrado nenhum aluno"});
    }
});

// Adiocionado ALuno com POST
app.post("/aluno", async(req, res) => {
    if(!req.body.nome || !req.body.nota){
        res.status(400).json({message: "Adicione um nome e uma nota"});
    } else{
        const aluno = await Aluno.create({
            nome: req.body.nome,
            nota: req.body.nota
        });
        res.status(201).json(aluno);
    }
});

//Pesquisar Aluno por id com GET
app.get("/aluno/:id", async(req, res) => {
    if(!req.params.id){
        res.status(400).json({message: "Adicione um id para busca"});
    }
    const findAluno = await Aluno.findById(req.params.id);
    if(findAluno){
        res.status(200).json(findAluno);
    } else{
        res.status(404).json({message: `Não foi encontrado nenhum aluno com id: ${req.params.id}`});
    }
})

//Deletar Aluno por id com DELETE
app.delete("/aluno/:id", async(req, res)=> {
    if(!req.params.id){
        res.status(400).json({message: "Adicione um id para busca"});
    }
    const findAluno = await Aluno.findById(req.params.id);
    if(findAluno){
        await Aluno.findByIdAndDelete(req.params.id);
        res.status(200).json({message: `O Aluno de id ${req.params.id} foi deletado`});
    }else{
        res.status(404).json({message: "Aluno nao encontrado"});
    } 
})

//Atualizar Aluno por id com PUT
app.put("/aluno/:id", async(req, res) => {
    if(!req.params.id){
        res.status(400).json({message: "Adicione um id para busca"});
    }
    const aluno = {nome:req.body.nome, nota:req.body.nota};
    if(!aluno.nome && !aluno.nota){
        res.status(400).json({message: "Adicione um novo nome"});
    }
    let findAluno = await Aluno.findById(req.params.id);
    if(findAluno){
        findAluno = await Aluno.findByIdAndUpdate(req.params.id, req.body,{new: true});
        res.status(200).json(findAluno);
    }else{
        res.status(404).json({message: "Aluno nao encontrado"});
    }
})
export default app