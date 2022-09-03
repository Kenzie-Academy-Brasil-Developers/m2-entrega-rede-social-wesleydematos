import { BotoesIndex } from "./botoesIndex.js";
import { Icon } from "./icons.js";

let spanEmail = document.getElementById('spanEmail')
let inputEmail = document.getElementById('inputEmail')
let spanSenha = document.getElementById('spanSenha')
let inputSenha = document.getElementById('inputSenha')
let btnRegistro = document.getElementById('btnRegistro')
let redirecionaBtn = document.getElementById('redirecionaBtn')

Icon.limpaInput(spanEmail, inputEmail)
Icon.mostraSenha(spanSenha, inputSenha)
BotoesIndex.redirecionaCadastro(btnRegistro)
BotoesIndex.redirecionaCadastro(redirecionaBtn)
BotoesIndex.recarregaPage()
BotoesIndex.logar()