function consultarId(input, users){
    console.table(users);
    let id = parseInt(input.question("Qual o id que deseja consultar: "));
    let index = users.findIndex((usuario) => usuario.id === id);
    console.log(users[index]);
}

module.exports = consultarId