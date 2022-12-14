import { BotoesCadastro } from "./botoesCad.js"
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
let btnCadLogin = document.getElementById('btnCadLogin')
let btnVoltar = document.getElementById('btnVoltar')
let redirecionaCadBtn = document.getElementById('redirecionaCadBtn')
let btnCadRegistro = document.getElementById('btnCadRegistro')

Icon.limpaInput(spanNome, inputNome)
Icon.limpaInput(spanEmail, inputEmail)
Icon.mostraSenha(spanSenha, inputSenha)
Icon.limpaInput(spanTrabalho, inputTrabalho)
Icon.limpaInput(spanFoto, inputFoto)
BotoesCadastro.redirecionaLogin(btnCadLogin)
BotoesCadastro.redirecionaLogin(btnVoltar)
BotoesCadastro.redirecionaLogin(redirecionaCadBtn)
BotoesCadastro.recarregaPage(btnCadRegistro)
BotoesCadastro.registrar()