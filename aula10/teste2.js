const input = require("readline-sync");
class Users {
    constructor(users){
        this.users = users
    }

    consultarCadastro(){
        console.table(this.users)
        while(true){
            let sair = parseInt(input.question("Digite 1 para sair: "));
                if(sair === 1){
                    break;
                }
        }
    }
    novoCadastro(){
        let id = parseInt(input.question("Digite o id do usuario: "));
        let checkId = this.users.find((user) => user.id === id);
        while(isNaN(id) || checkId){
        id = parseInt(input.question("ID invalido, digite um novo ID: "));
        checkId = this.users.find((user) => user.id === id);
        } 
        const user = {
            id: id,
            nome: input.question("Digite o nome do usuario: "),
            email: input.question("Digite o e-mail do usuario: "),
        }
        console.log(user, "Foi adicionado com sucesso");
        this.users.push(user);
    }
    consultarPorId(){
        console.table(this.users);
        let id = parseInt(input.question("Qual o id que deseja consultar: "));
        let index = this.users.findIndex((usuario) => usuario.id === id);
        console.log(this.users[index]);
        while(true){
            let sair = parseInt(input.question("Digite 1 para sair: "));
            if(sair === 1){
                break;
            }
        }
    }
    alterarCadastro(){
        console.table(this.users)
        let id = parseInt(input.question("Escolha o ID do usuario que deseja atualizar: "));
        let user = this.users.find((usuario) => usuario.id === id);
        if(user){
            console.log(user, "Foi selecionado")
        } else{
            console.log("ERRO !!! Voce escolheu um ID invalido");
            return
        }
        let invalid
        do {
            invalid = false
            let userItem = parseInt(input.question(`Qual item do usuario deseja atualizar:
            1 - Nome
            2 - E-mail
            `));
            switch(userItem){
                case 1: {
                    let novoNome = input.question("Digite o novo nome do usuario: ");
                    user.nome = novoNome;
                }break;
                case 2: {
                    let novoEmail = input.question("Digite o novo e-mail do usuario: ");
                    user.email = novoEmail;
                }break;
                default:{
                    console.log("ERRO !! Acao invalida");
                    invalid = true
                }
            }
        } while(invalid)
        console.log(user, "Foi atualizado com sucesso")
    }
    deletarCadastro(){
        console.table(this.users);
        let id = parseInt(input.question("Escolha o ID do usuario que deseja excluir: "));
        let user = this.users.findIndex((usuario) => usuario.id === id );
        if(user === -1){
            console.log("ERRO !! Voce digitou um ID invalido");
            return
        } else{
            console.log(this.users[user], "Foi Deletado com sucesso")
            this.users.splice(user, 1);
        }
    }
}

const users = new Users([
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
])
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
        case 1: { users.consultarCadastro()};break;
        case 2: { users.novoCadastro() }break;
        case 3: { users.consultarPorId() }break;
        case 4: { users.alterarCadastro() }break;
        case 5: { users.deletarCadastro() }break;
        case 6: { aplicativo = false };break;
        default: {
            console.log("Erro !! escolha uma acao valida");
        }
    }

}while(aplicativo)