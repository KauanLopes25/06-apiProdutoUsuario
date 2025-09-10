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


module.exports = {
    getAllprodutos,
    getProdutoById
}