'use strict'

/********************************************************************************************
* Objetivo: Arquivo responsável por declarar as rotas de comunicação entre o Front-end e API
* Autor: Kauan Lopes Pereira
* Data: 10/09/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************


********************************************************************************************/

const express = require('express')

const router = express.Router();

const produtoController = require('..//controller/produtoController')

// Criando as rotas da nossa API

// 1° Rota para obter todos os produtos
router.get('/', produtoController.getAllprodutos)


module.exports = router