'use strict'

/********************************************************************************************
* Objetivo: Arquivo responsável por interagir com os dados do "banco de dados" usuarios.
* Autor: Kauan Lopes Pereira
* Data: 10/09/2025
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
const produtos = require('../../data/produtos.json')
// Modulo node para criar caminhos seguros idependente do sistema operacional
const path = require('path')
// Caminho do dados de clientes
const dataPath = path.join(__dirname, '../../data/produtos.json')

// Função para retornar todos os produtos do banco de dados
const findAll = () => {
    return produtos;
}

// Função para buscar e retornar um produto pelo ID no banco de dados
const findById = (id) => {
    return produtos.find(produto => produto.id === id)
}

// Função para buscar um produto por noem no banco de dados
const findByName = (nome) => {
    return produtos.find(produto => produto.nome === nome)
}

// Função para cadastrar um produto no banco de dados
const createNewProduto = (newProduto) => {
    const newId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
    // produtos.length > 0                          Condição de comparação, indicada pelo?
    // produtos[produtos.length - 1].id + 1         Execução caso atenda a condição de comparação
    // :1                                           Execução caso não atenda, indicado pelo :
    const produtoWithId = { id: newId, ...newProduto }
    // Atualiza os dados na memória RAM
    produtos.push(produtoWithId)
    // Atualiza os dados no disco
    fs.writeFileSync(dataPath, JSON.stringify(produtos, null, 2), 'utf-8')
    return produtoWithId
}

module.exports = {
    findAll,
    findById,
    findByName,
    createNewProduto
}