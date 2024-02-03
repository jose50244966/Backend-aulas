import express from "express";
import connectDB from "./config/dbConnect.js";
import cliente from "./models/Clientes.js";


//Conexão com o banco de dados
const connect = await connectDB();

connect.on("error", (erro) => {
    console.error("Erro na conexao", erro)
});
connect.once("open", () => {
    console.log("Conctado ao banco de dados")
});
//

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Rotas

//Pagina principal GET
app.get("/", (req, res) => {
    res.status(200).send(`<h1>Home Page</h1>`);
})

//Consultar todos os clientes GET
app.get("/cliente", async(req ,res) => {
    const listaClientes = await cliente.find({})
    res.status(200).json(listaClientes)

})

//Criar novo cliente POST
app.post("/cliente", async(req, res) => {
    const novoCliente = {nome: req.body.nome, email: req.body.email};
    if(!novoCliente.nome || !novoCliente.email){
        return res.status(400).json({message: "Insira um nome e email"});
    }
    const clientes = await cliente.find({});
    if(clientes){
        cliente.create(novoCliente)
        return res.status(201).json(novoCliente)
    }
})

//Pesquisar cliente por id GET
app.get("/cliente/:id/", async(req, res) => {
    if(!req.params.id){
        return res.status(400).json({message: "Informe um id"})
    }

    const clienteById = await cliente.findById(req.params.id);
    if(clienteById){
        res.status(200).json(clienteById)
    }
})
export default app