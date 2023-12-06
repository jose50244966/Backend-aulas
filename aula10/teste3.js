class Users {
    constructor(){

    }
}
class User extends Users{
    constructor(id, nome, email, array){
        super(array);
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

const users = new Users ([
    new User(1,"Pedro","pedro@gmail.com"),
    new User(2,"Tomaz","tomaz@gmail.com"),
    new User(3,"Fatima","fatima@gmail.com"),
])