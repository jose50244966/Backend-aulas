class Animal {
    constructor(nome, tipo, patas) {
        this.tipo = tipo;
        this.nome = nome;
        this.patas = patas
    }
    quatroPatas(){
        if(this.patas === 4){
            console.log(`Esse animal tem ${this.patas} patas, entao e quadrupede`)
        } else{
            console.log(`Esse animal tem ${this.patas} patas, nao e quadrupede`)
        }
    }
}

let meuAnimal = new Animal("Yuki", "cachorro", 4);
meuAnimal.quatroPatas()