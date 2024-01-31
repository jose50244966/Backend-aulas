const numeros = [
    {id: 4},
    {id: 2},
    {id: 1},
    {id: 3},
    {id: 6},
    {id: 6},
]
const findAluno = (id, array) => {
    const alunoId = array.findIndex(element => element.id === id);
    if(alunoId === -1){
        return `ID invalido, nenhum aluno com o id ${id} foi encontrado`
    } else{
        return alunoId
    }

}

const createId = (array) => {
    let id = 1
    if(!isNaN(findAluno(id, array))){
        for(let i = 0; i < 2;i++){
            for(let k = 0; k < array.length; k++){
                if(id === array[k].id){
                    id++;
                    i = 0;
                    break;
                }
            }
        }
    }
    return id
}
console.log(createId(numeros));

// for(let i = 0; i < 10; i++){
//     for(let k = 0; k < 10; k++){
//         if(i === k){
//             break
//         }
//         console.log(i,k)
//     }
// }