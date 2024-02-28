import mongoose from "mongoose";

const alunoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    }
});
const alunoModel = mongoose.model("Aluno", alunoSchema);
export default alunoModel;