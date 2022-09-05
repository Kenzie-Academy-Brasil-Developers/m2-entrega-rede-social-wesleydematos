import { Api } from "./models/api.js"

export class BotoesIndex{
    static redirecionaCadastro(botao){
        botao.addEventListener('click', (event)=>{
            event.preventDefault()

            window.location.replace('./src/pages/cadastro.html')
        })
    }

    static recarregaPage(){
        let btnLogin = document.getElementById('btnLogin')
        btnLogin.addEventListener('click', (event)=>{
            event.preventDefault()

            window.location.reload()
        })
    }

    static logar(){
        let logarBtn = document.getElementById('logarBtn')

        logarBtn.addEventListener('click', (event)=>{
            event.preventDefault()

            let email = document.getElementById('inputEmail')
            let password = document.getElementById('inputSenha')

            let body = JSON.stringify({
                "email": email.value,
                "password": password.value
            })

            Api.logar(body)
        })
    }
}