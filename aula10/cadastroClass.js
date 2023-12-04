const input = require("readline-sync");
class User {
    constructor(id,nome,email){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    consultarCadastro (){
            console.log(this)
    }

    alterarCadastro (){
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
                this.nome = novoNome;
            }break;
            case 2: {
                let novoEmail = input.question("Digite o novo e-mail do usuario: ");
                this.email = novoEmail;
            }break;
            default:{
                console.log("ERRO !! Acao invalida");
                invalid = true
            }
        }
    } while(invalid)
    console.log(this, "Foi atualizado com sucesso")
    }
}
const users = [
    new User(1,"Pedro","pedro@gmail.com"),
    new User(2,"Tomaz","tomaz@gmail.com"),
    new User(3,"Fatima","fatima@gmail.com"),
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
        case 1: { console.table(users)  }break;
        case 2: {  }break;
        case 3: {  }break;
        case 4: { buscarUser(users).alterarCadastro() }break;
        case 5: {  }break;
        case 6: { aplicativo = false };break;
        default: {
            console.log("Erro !! escolha uma acao valida");
        }
    }

}while(aplicativo)

function buscarUser(array){
    let id = parseInt(input.question("Qual o ID do usuario que deseja atualizar: "))
    let index = array.findIndex((element) => element.id === id)
    if(index === -1){
        console.log("Erro ID invalido")
    } else{
        return array[index]
    }
    
}