import express from "express";


import Aluno from "./models/alunoModel.js"



const app = express();

const alunos = [
    {id: 1, name: "Pedro"},
    {id: 2, name: "Tomaz"},
    {id: 3, name: "Lucas"},
];

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const findAluno = (id, array) => {
    const alunoId = array.findIndex(element => element.id === id);
    if(alunoId === -1){
        return `ID invalido, nenhum aluno com o id ${id} foi encontrado`
    } else{
        return alunoId
    }

}
const createId = (array) => {
    let id = 1
    if(!isNaN(findAluno(id, array))){
        for(let k = 0; k < array.length; k++){
            for(let i = 0; i < array.length; i++){
                if(id === array[i].id){
                    id++;
                    break;
                }
            }
        }
    }
    return id
}

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

// Adicionar aluno usando POST

app.post("/alunos", (req, res) => {
    const aluno = {
        id: createId(alunos),
        nome: req.body.nome
    };
    if(!aluno.nome){
        res.status(400).json({message: "Informação invalida, adicione um nome"})
    } else{
        alunos.push(aluno);
        res.status(201).json(aluno);
    }
    
});

// Deletar aluno usando DELETE
app.delete("/alunos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const found = findAluno(id, alunos);
    if(isNaN(found)){
        res.status(404).json({message: found});
    } else{
        alunos.splice(found, 1);
        res.status(200).json({message: `O aluno de id ${id} foi apagado`});
    }
});

// Atualizar aluno usando PUT
app.put("/alunos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const found = findAluno(id, alunos);
    if(isNaN(found)){
        res.status(404).json({message: found});
    }else {
        alunos[found].name = req.body.nome;
        res.status(200).json({message: `O aluno de id ${id} foi alterado com sucesso`});
    }
})

app.get("/alunos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const found = findAluno(id, alunos);
    if(isNaN(found)){
        res.status(404).json({message: found});
    }else {
        res.status(200).json(alunos[found]);
    }

})


// Adiocionado ALuno no Mongo POST

app.get("/mongo/aluno", async(req, res) => {
    const alunos = await Aluno.find({});
    if(alunos){
        res.status(200).json(alunos)
    }else{
        res.status(400).json({message: "Não foi encontrado nenhum aluno"});
    }
})
app.post("/mongo/aluno", async(req, res) => {

    if(!req.body.nome){
        res.status(400).json({message: "Adicione um nome"});
    } else{
        const aluno = await Aluno.create({
            nome: req.body.nome
        });
        res.status(200).json(aluno);
        
    }
})

app.delete("/mongo/aluno/:id", async(req, res)=> {
    const id = req.params.id;
    const findAluno = await Aluno.findById(id);
    if(findAluno){
        await Aluno.findByIdAndDelete(id);
        res.status(200).json({message: `O Aluno de id ${id} foi deletado`})
    }else{
        res.status(404).json({message: "Aluno nao encontrado"})
    }
})

export default app