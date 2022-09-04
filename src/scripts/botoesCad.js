import { Api } from "./models/api.js"

export class BotoesCadastro{
    static redirecionaLogin(botao){
        botao.addEventListener('click', (event)=>{
            event.preventDefault()

            window.location.assign('../../index.html')
        })
    }

    static recarregaPage(botao){
        botao.addEventListener('click', (event)=>{
            event.preventDefault()

            window.location.reload()
        })
    }

    static registrar(){
        let registarBtn = document.getElementById('registarBtn')

        registarBtn.addEventListener('click', (event)=>{
            event.preventDefault()

            let username = document.getElementById('inputNome')
            let email = document.getElementById('inputEmail')
            let password = document.getElementById('inputSenha')
            let work = document.getElementById('inputTrabalho')
            let image = document.getElementById('inputFoto')

            let body = JSON.stringify({
                "username": username.value,
                "email": email.value,
                "password": password.value,
                "work_at": work.value,
                "image": image.value
            })

            console.log(body)

            Api.cadastro(body)
            window.location.assign('../../index.html')
        })
    }
}