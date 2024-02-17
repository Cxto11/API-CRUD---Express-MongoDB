import express from "express"
import LivroController from "../controllers/livroController.js"

const routes = express.Router()

routes.get("/livros", LivroController.listarLivros)
routes.get("/livros/busca", LivroController.listarLivroPorEditora)
routes.get("/livros/:id", LivroController.listarLivroPorID)
routes.post("/livros", LivroController.cadastrarLivros)
routes.put("/livros/:id", LivroController.atualizarLivro)
routes.delete("/livros/:id", LivroController.deletarLivro)

export default routes