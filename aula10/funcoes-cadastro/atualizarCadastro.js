
function attUser(input,users){
    console.table(users)
    let id = parseInt(input.question("Escolha o ID do usuario que deseja atualizar: "));
    let user = users.find((usuario) => usuario.id === id);
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

module.exports = attUser