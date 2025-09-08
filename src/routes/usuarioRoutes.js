'use strict'

/********************************************************************************************
* Objetivo: Arquivo responsável por declarar as rotas de comunicação entre o Front-end e API
* Autor: Kauan Lopes Pereira
* Data: 27/08/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************


********************************************************************************************/

const express = require('express')

const router = express.Router();

const userController = require('..//controller/usuarioController')

// Criando as rotas da nossa API

// 1° Rota para obter todos os usuarios
router.get('/', userController.getAllUsers)

// 2° Rota para obter dados de um usuario por ID
router.get('/id/:id', userController.getUserById)

// 3° Rota para obter dados de um usuario por nome
router.get('/nome/:nome', userController.getUserByName)

// 4° Rota para cadastrar um cliente
router.post('/cadastro/', userController.createUser)

//5° Rota para atualizar um cliente
router.put('/atualizar/:id', userController.putDateUser)

module.exports = router