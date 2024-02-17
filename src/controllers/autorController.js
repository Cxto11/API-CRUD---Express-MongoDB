import {autor} from "../models/Autor.js"

class AutorController {

    static async listarAutores(req,res){
        try{
            const listarAutores = await autor.find({})
            res.status(200).json(listarAutores)
        }catch(erro){
            res.status(500).json({message:`${erro.message}  - falha na requisição `})
        }
    }

    static async listarAutorPorID(req,res){
        try{
            const id = req.params.id
            const autorEncontrado = await autor.findById(id)
            res.status(200).json(autorEncontrado)
        }catch(erro){
            res.status(500).json({message:`${erro.message}  - falha na requisição do autor`})
        }
    }

    static async cadastrarAutor(req,res){
        try{
            const novoAutor = await autor.create(req.body)
            res.status(201).json({message:"criado com sucesso", autor: novoAutor})
        } catch(erro){
            res.status(500).json({message:`${erro.message} - falha ao cadastrar Autor`})
        }
    }

    static async atualizarAutor(req,res){
        try{
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Autor Atualizado!"})
        }catch(erro){
            res.status(500).json({message:`${erro.message}  - falha na atualização`})
        }
    }

    static async deletarAutor(req,res){
        try{
            const id = req.params.id
            await autor.findByIdAndDelete(id)
            res.status(200).json({message: "autor deleted successfully"})
        }catch(erro){
            res.status(500).json({message:`${erro.message}  - falha ao deletar livro`})
        }
    }

}

export default AutorController