
function criarUser(input,users){
    let id = parseInt(input.question("Digite o id do usuario: "));
    let checkId = users.find((user) => user.id === id);
    while(isNaN(id) || checkId){
    id = parseInt(input.question("ID invalido, digite um novo ID: "));
    checkId = users.find((user) => user.id === id);
    } 
    const user = {
        id: id,
        nome: input.question("Digite o nome do usuario: "),
        email: input.question("Digite o e-mail do usuario: "),
    }
    console.log(user, "Foi adicionado com sucesso");
    users.push(user);
}

module.exports = criarUser