'use strict'

/********************************************************************************************
* Objetivo: Arquivo responsavel pelo controle das requisições executadas pelo front
* Autor: Kauan Lopes Pereira
* Data: 10/09/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************


********************************************************************************************/// Importação das funções presentes no userModel
const produtoModel = require('../model/produtoModel')
const { use } = require('../routes/produtoRoutes')

// Controlador para listar todos os produtos
const getAllprodutos = (req, res) => {
    const produtos = produtoModel.findAll()
    res.status(200).json(produtos)
}

// Função para o controlador obter o id do produto
const getProdutoById = (req, res) => {
    // Pegando o id que foi enviado na requisicao
    const id = parseInt(req.params.id)

    // Chamando o metodo findById do produtoModel
    const produto = produtoModel.findById(id)

    if (produto) {
        // Responder com status code de 200 (Sucesso!)
        //e devolver os dados do produto em forma json
        res.status(200).json(produto)
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' })
    }
}

// Função do controlador para obter o nome do produto
const getProdutoByName = (req, res) => {

    // Pegando o nome que foi enviado na requisição
    const nome = (req.params.nome)

    // Chamando o metodo findByName do user model
    const produto = produtoModel.findByName(nome)
    
    if (produto) {
        // Responder com status code de 200 (Sucesso!)
        //e devolver os dados do produto em forma json
        res.status(200).json(produto)
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' })
    }
}

const createProduto = (req, res) =>{
    // Pegando os dados que foram enviados pelo Body (Corpo da Requisição)
    const {nome, descricao, preco, categoria, estoque, ativo} = req.body

    // Validar se foram enviados
    if(!nome || !descricao || !preco || !categoria || !estoque || !ativo){
        return res.status(400).json({mensagem: 'Todos os campos devem ser preenchidos'})
    } else{
        const newProduto = produtoModel.createNewProduto({nome, descricao, preco, categoria, estoque, ativo})
        res.status(201).json(newProduto)
    }

}

const putDateProduto = (req, res) => {
    // Pegando o id que foi enviado na requisicao
    const idProduto = parseInt(req.params.id)

    // Pegando os dados que foram enviados pelo Body (Corpo da Requisição)
    const {id, nome, descricao, preco, categoria, estoque, ativo} = req.body

    // Validar se foram enviados
    if(id == null || nome == null || descricao == null || preco == null || categoria == null || estoque == null || ativo == null){
        return res.status(400).json({mensagem: 'Todos os campos devem ser informados'})
    } else{
        const allUpdate = produtosModel.updateUser(idProduto, {id, nome, descricao, preco, categoria, estoque, ativo})
        res.status(201).json(allUpdate)
    }
}

module.exports = {
    getAllprodutos,
    getProdutoById,
    getProdutoByName,
    createProduto,
    putDateProduto
}