const input = require("readline-sync");
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudacao() {
        return `Ola sou ${this.nome} e tenho ${this.idade} anos.`
    }
    maiorDeIdade(){
        if(this.idade >= 18) {
            return `Voce e maior de Idade, tem ${this.idade} anos`
        } else{
            return `Menor de idadde, voce tem ${this.idade} anos`
        }
    }
}

let nome = input.question("Qual o seu nome: ");
let idade = parseInt(input.question("Qual a sua idade: "));

let euSou = new Pessoa(nome,idade);
console.log(euSou.saudacao());
console.log(euSou.maiorDeIdade());
