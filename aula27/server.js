import app from "./src/app.js";
import mongoose from "mongoose"
const URI = "Adicione uma URI"
const connectDB = async() => {
    try{
        await mongoose.connect(URI)
        console.log("Connectd to mongo server")
    }catch(error){
        console.log(error)
    }
}
connectDB();

const PORT = 3000;



app.listen(PORT, ()=>console.log(`Listening on port ${PORT}...`));
