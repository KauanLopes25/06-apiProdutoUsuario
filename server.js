'use strict'

/********************************************************************************************
* Objetivo: Criação de uma Web API com node.js, arquivo responsavel por rodas toda a aplica
            ção da api
* Autor: Kauan Lopes Pereira
* Data: 03/09/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************
* get() - 
* listen() -

******************************** BIBLIOTECAS UTILIZADAS *************************************
* express() - FrameWork para facilitar a criação de API

********************************************************************************************/

// Importar o módulo do Express
const express = require('express')

// Importar as rotas de usuário
const userRoutes = require('./src/routes/usuarioRoutes')
const produtoRoutes = require('./src/routes/produtoRoutes')

// Criar uma aplicação express
const app = express()

// Definir um Middleware para analisar Json no corpo das requisições
app.use(express.json())

// Definir a porta em que o servidor irá escutar
const porta = 8000

// Rota de teste API
app.get('/', (req,res) => {
    res.send("API de Produtos e Usuários está funcionando")
})

// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})

// Definindo a rotas padrão de usuarios
app.use('/api/users', userRoutes)

// Definindo a rotas padrão de produtos
app.use('api/produtos', produtoRoutes)