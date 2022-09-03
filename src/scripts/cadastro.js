import { Icon } from "./icons.js"

let inputNome = document.getElementById('inputNome')
let spanNome = document.getElementById('spanCadNome')
let inputEmail = document.getElementById('inputEmail')
let spanEmail = document.getElementById('spanCadEmail')
let inputSenha = document.getElementById('inputSenha')
let spanSenha = document.getElementById('spanCadSenha')
let inputTrabalho = document.getElementById('inputTrabalho')
let spanTrabalho = document.getElementById('spanCadTrabalho')
let inputFoto = document.getElementById('inputFoto')
let spanFoto = document.getElementById('spanCadFoto')

Icon.limpaInput(spanNome, inputNome)
Icon.limpaInput(spanEmail, inputEmail)
Icon.mostraSenha(spanSenha, inputSenha)
Icon.limpaInput(spanTrabalho, inputTrabalho)
Icon.limpaInput(spanFoto, inputFoto)
