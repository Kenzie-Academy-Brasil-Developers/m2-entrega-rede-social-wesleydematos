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

            // ADICIONAR LOGICA DE CADASTRO

            window.location.assign('../../index.html')
        })
    }
}