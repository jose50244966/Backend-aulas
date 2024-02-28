import app from "./src/app.js";
import "dotenv/config"
import mongoose from "mongoose"
import path from "path"
const URI = "Adicione uma URI"
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connectd to mongo server")
    }catch(error){
        console.log(error)
    }
}
connectDB();
const __dirname = import.meta.dirname;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade')

const PORT = 3000;



app.listen(PORT, ()=>console.log(`Listening on port ${PORT}...`));
