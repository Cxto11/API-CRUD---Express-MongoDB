import livro from "../models/Livro.js"
import {autor} from "../models/Autor.js"

class LivroController {

    static async listarLivros(req,res){
        try{
            const listarLivros = await livro.find({})
            res.status(200).json(listarLivros)
        }catch(erro){
            res.status(500).json({message:`${erro.message}  - falha na requisição `})
        }
    }

    static async listarLivroPorID(req,res){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        }catch(erro){
            res.status(500).json({message:`${erro.message}  - falha na requisição do Livro`})
        }
    }

   
    static async cadastrarLivros(req,res){
        const novoLivro = req.body
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = { ...novoLivro, autor:{...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({message:"criado com sucesso", livro: livroCriado})
        } catch(erro){
            res.status(500).json({message:`${erro.message} - falha ao cadastrar livro`})
        }
    }

    static async atualizarLivro(req,res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Livro Atualizado!"})
        }catch(erro){
            res.status(500).json({message:`${erro.message}  - falha na atualização`})
        }
    }


    static async deletarLivro(req,res){
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id, req.body)
            res.status(200).json({message: "Livro deleted successfully"})
        }catch(erro){
            res.status(500).json({message:`${erro.message}  - falha ao deletar`})
        }
    }

    static async listarLivroPorEditora(req, res){
        const editora = req.query.editora
        try{
            const livrosPorEditora = await livro.find({editora:editora})
            res.status(200).json(livrosPorEditora)
        }catch(erro){
            res.status(500).json({message:`${erro.message} - falha na busca`})
        }

    }

}

export default LivroController