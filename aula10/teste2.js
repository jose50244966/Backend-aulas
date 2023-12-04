class User {
    constructor(user){
        this.user = user
    }

    consultarCadastro(){
        console.table(this.user)
    }
}

const users = new User([
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

users.consultarCadastro()