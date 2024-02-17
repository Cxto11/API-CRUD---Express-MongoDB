import express from "express";
import conectaDataBase from "./config/dbConnect.js"
import routes from "./routes/index.js"
import routesAutor from "./routes/index.js"

const conexao = await conectaDataBase()

conexao.on("error", (erro) => {
    console.error("erro de conexão",erro)
})
conexao.once("open", () => {
    console.log("connection has been successfully")
})

const app = express(); 
routes(app)



export default app

//mongodb+srv://admin:<password>@cluster0.jdwyrer.mongodb.net/?retryWrites=true&w=majority