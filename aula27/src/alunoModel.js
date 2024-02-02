import mongoose from "mongoose";

const alunoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    nota: {
        type: Number,
        required: true,
        min:[0, "Nota minima e zero"],
        max:[10, "Nota maxima e dez"]
    }
}, {
    timestamps: true
});
const alunoModel = mongoose.model("Aluno", alunoSchema);
export default alunoModel;