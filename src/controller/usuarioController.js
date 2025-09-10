'use strict'

/********************************************************************************************
* Objetivo: Arquivo responsavel pelo controle das requisições executadas pelo front
* Autor: Kauan Lopes Pereira
* Data: 27/08/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************


********************************************************************************************/

// Importação das funções presentes no userModel
const userModel = require('../model/usuarioModel')
const {use} = require('../routes/usuarioRoutes')

// Controlador para listar todos os usuarios
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

// Método do controlador para obter um usuário por ID
const getUserById = (req, res) => {

    // Pegando o id que foi enviado na requisicao
    const id = parseInt(req.params.id)

    // Chamando o metodo findById do userModel
    const user = userModel.findById(id)

    if(user){
        // Responder com status code de 200 (Sucesso!)
        //e devolver os dados do usuario em forma json
        res.status(200).json(user)
    } else{
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!'})
    }
}

// Método do controlador para obter um usuário por nome
const getUserByName = (req, res) => {

    // Pegando o nome que foi enviado na requisicao
    const nome = (req.params.nome)

    // Chamando o metodo findByName do userModel
    const user = userModel.findByName(nome)

    if(user){
        // Responder com status code de 200 (Sucesso!)
        //e devolver os dados do usuario em forma json
        res.status(200).json(user)
    } else{
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!'})
    }
}

// Método do controlador para criar um novo usuário
const createUser = (req, res) =>{
    // Pegando os dados que foram enviados pelo Body (Corpo da Requisição)
    const {nome, email, telefone, endereco, dataCadastro, ativo} = req.body

    // Validar se foram enviados
    if(!nome || !email || !telefone || !endereco || !dataCadastro || !ativo){
        return res.status(400).json({mensagem: 'Nome e email são obrigatórios'})
    } else{
        const newUser = userModel.createNewUser({nome, email, telefone, endereco, dataCadastro, ativo})
        res.status(201).json(newUser)
    }

}

// Método do controlador para atualizar as informações do cliente

const putDateUser = (req, res) => {
    // Pegando o id que foi enviado na requisicao
    const idUser = parseInt(req.params.id)

    // Pegando os dados que foram enviados pelo Body (Corpo da Requisição)
    const {id, nome, email, telefone, endereco, dataCadastro, ativo} = req.body

    // Validar se foram enviados
    if(id == null || nome == null || email == null || telefone == null || endereco == null || dataCadastro == null || ativo == null){
        return res.status(400).json({mensagem: 'Todos os campos devem ser informados'})
    } else{
        const allUpdate = userModel.updateUser(idUser, {id, nome, email, telefone, endereco, dataCadastro, ativo})
        res.status(201).json(allUpdate)
    }
}

// Função do controlador para deletar informações do cliente

const deleteUserController = (req, res) => {
    // Pegando o id que foi enviado na requisicao
    const idUser = parseInt(req.params.id)

    // Enviando o ID para o userModel
    userModel.deleteUser(idUser)
    
    if(idUser){
        // Responder com status code de 200 (Sucesso!)
        //e devolver os dados do usuario em forma json
        res.status(200).json({mensagem: 'Usuário deletado com sucesso'})
    } else{
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!'})
    }

}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByName,
    createUser,
    putDateUser,
    deleteUserController
}