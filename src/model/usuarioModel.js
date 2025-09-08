'use strict'

/********************************************************************************************
* Objetivo: Arquivo responsável por interagir com os dados do "banco de dados" usuarios.
* Autor: Kauan Lopes Pereira
* Data: 03/09/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************
* find() - Retorna o primeiro valor encontrado com base no parametro fornecido
* ... - Serve para adicionar elementos entre arrays.
******************************** BIBLIOTECAS UTILIZADAS *************************************

********************************************************************************************/

const users = require('../../data/clientes.json')

// Função para retornar todos os usuáruos
const findAll = () => {
    return users;
}

// Função para buscar um usuário por ID
const findById = (id) => {
    return users.find(user => user.id === id)
}

// Função para buscar um usuário por nome
const findByName = (nome) => {
    return users.find(user => user.nome === nome)
}

// Função para adicionar um novo usuario
const createNewUser = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    // User.length > 0                              Condição de comparação, indicada pelo?
    // User[user.length - 1].id + 1                 Execução caso atenda a condição de comparação
    // :1                                           Execução caso não atenda, indicado pelo :
    const userWithId = {id: newId, ...newUser}
    users.push(userWithId)
    return userWithId
}

module.exports = {
    findAll,
    findById,
    findByName,
    createNewUser
}