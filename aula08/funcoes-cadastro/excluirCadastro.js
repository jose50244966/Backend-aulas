function delUser(input,users){
    console.table(users);
    let id = parseInt(input.question("Escolha o ID do usuario que deseja excluir: "));
    let user = users.findIndex((usuario) => usuario.id === id );
    if(user === -1){
        console.log("ERRO !! Voce digitou um ID invalido");
        return
    } else{
        console.log(users[user], "Foi Deletado com sucesso")
        users.splice(user, 1);
    }
}

module.exports = delUser