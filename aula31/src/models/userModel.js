import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

export default User