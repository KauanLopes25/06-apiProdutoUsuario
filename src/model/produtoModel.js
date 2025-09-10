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
