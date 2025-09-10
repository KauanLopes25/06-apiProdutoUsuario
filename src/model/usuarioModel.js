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
* fs - File System → módulo nativo do Node que permite ler e escrever arquivos.
* path - Módulo do Node que ajuda a montar caminhos de arquivos de forma segura, 
         independente do sistema operacional (Windows, Linux, Mac).
* __dirname - Diretório atual do arquivo onde esse código está.
* path.join(...) - Monta o caminho corretamente, sem precisar se preocupar com / ou \
* JSON.stringify(array, null, 2) - Transforma o array em JSON formatado.
                                    O null, 2 deixa o arquivo bonitinho, 
                                    com indentação de 2 espaços.
* fs.writeFileSync(...) - Sobrescreve o arquivo clientes.json com os dados novos.
* 'utf-8' - Garante que o arquivo seja gravado em UTF-8.
             UTF-8 é um padrão de codificação de texto que representa praticamente todos os 
             caracteres usados no mundo.
******************************** BIBLIOTECAS UTILIZADAS *************************************

********************************************************************************************/

// Constante para ler e escrever em arquivos
const fs = require('fs')
// Caminho dos dados de clientes 
const users = require('../../data/clientes.json')
// Modulo node para criar caminhos seguros idependente do sistema operacional
const path = require('path')
// Caminho do dados de clientes
const dataPath = path.join(__dirname, '../../data/clientes.json')

// Função para retornar todos os usuáruos
const findAll = () => {
    return users;
}

// Função para buscar um usuário por ID no bando de dados
const findById = (id) => {
    return users.find(user => user.id === id)
}

// Função para buscar um usuário por nome no banco de dados
const findByName = (nome) => {
    return users.find(user => user.nome === nome)
}

// Função para adicionar um novo usuario no banco de dados
const createNewUser = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    // User.length > 0                              Condição de comparação, indicada pelo?
    // User[user.length - 1].id + 1                 Execução caso atenda a condição de comparação
    // :1                                           Execução caso não atenda, indicado pelo :
    const userWithId = {id: newId, ...newUser}
    // Atualiza os dados na memória RAM
    users.push(userWithId)
    // Atualiza os dados no disco
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2), 'utf-8')
    return userWithId
}
// Função para atualizar os dados de um cliente no banco de dados
const updateUser = (id, updatedFields) => {
    const index = users.findIndex(u => u.id === id)
  
    if (index === -1) {
      return null // cliente não encontrado
    }
  
    // Atualiza apenas os campos enviados
    users[index] = { ...users[index], ...updatedFields }
  
    // Salva o array atualizado no arquivo JSON
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2), 'utf-8')
  
    return users[index]
}

module.exports = {
    findAll,
    findById,
    findByName,
    createNewUser,
    updateUser
}