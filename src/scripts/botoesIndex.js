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

            // ADICIONAR LOGICA DE LOGIN

            window.location.assign('./src/pages/dashboard.html')
        })
    }
}