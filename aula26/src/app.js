import express from "express";

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
// Pesquisar aluno por id usando GET
app.get("/alunos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const found = findAluno(id, alunos);
    if(isNaN(found)){
        res.status(404).json({message: found});
    }else {
        res.status(200).json(alunos[found]);
    }

})

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

export default app;