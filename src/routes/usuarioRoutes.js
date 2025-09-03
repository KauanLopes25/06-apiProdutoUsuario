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

module.exports = router