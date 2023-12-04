const input = require("readline-sync");
const criarUser = require("./funcoes-cadastro/criarCadastro");
const attUser = require("./funcoes-cadastro/atualizarCadastro");
const delUser = require("./funcoes-cadastro/excluirCadastro");
const consultarId = require("./funcoes-cadastro/consultaId");


const users = [
    {
        id: 1,
        nome: "Pedro",
        email: "pedro@gmail.com",
    },
    {
        id: 2,
        nome: "Tomaz",
        email: "tomaz@gmail.com",
    },
    {
        id: 3,
        nome: "Fatima",
        email: "fatima@hellcife.com",
    },
]
let aplicativo = true;
do {
    const cadastro = parseInt(input.question(`Bem vindo ao cadastro, qual acao deseja realizar:
    
    1 - Consultar cadastros
    2 - Novo cadastro
    3 - Consultar por ID
    4 - Alterar cadastro
    5 - Deletar cadastro
    6 - Sair
    `));
    switch(cadastro){
        case 1: { 
            console.table(users); 
            while(true){
                let sair = parseInt(input.question("Digite 1 para sair: "));
                if(sair === 1){
                    break;
                }
            }
        };break;
        case 2: { criarUser(input,users)} ;break;
        case 3: { consultarId(input,users)}break;
        case 4: { attUser(input,users) };break;
        case 5: { delUser(input,users) };break;
        case 6: { aplicativo = false };break;
        default: {
            console.log("Erro !! escolha uma acao valida");
        }
    }

}while(aplicativo)



