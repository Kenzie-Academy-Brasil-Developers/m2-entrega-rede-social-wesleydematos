export class BotoesDashboard {
    static sair(){
        let btnCadLogin = document.getElementById('btnCadLogin')

        btnCadLogin.addEventListener('click', (event)=>{
            event.preventDefault()

            localStorage.clear()
            window.location.replace('../../index.html')
        })
    }

    static postar(){
        let btnPostar = document.getElementById('btnPostar')
        let tituloPost = document.querySelector('.titulo__post')
        let descricaoPost = document.querySelector('.descricao__post')

        tituloPost.addEventListener('input', (event)=>{
            event.preventDefault()

            if(tituloPost.value != '' && descricaoPost.value != ''){
                btnPostar.classList.add('post__pronto')
            }
        })

        descricaoPost.addEventListener('input', (event)=>{
            event.preventDefault()
            
            if(tituloPost.value != '' && descricaoPost.value != ''){
                btnPostar.classList.add('post__pronto')
            }
        })

        console.log(btnPostar)

        btnPostar.addEventListener('click', (event)=> {
            event.preventDefault()

            btnPostar.classList.remove('post__pronto')

            // CRIAR LOGICA DE POST
            tituloPost.value = ''
            descricaoPost.value = ''
        })
    }

    static seguir(){

    }

    static pararDeSeguir(){

    }

    static curtir(){

    }

    static descurtir(){

    }

    static abrirPost(){

    }

    static fecharPost(){

    }

    static voltaLogin(){
        let token = localStorage.getItem('@redeSocial:token')
        let user_uuid = localStorage.getItem('@redeSocial:user_uuid')

        if(!token || !user_uuid){
            localStorage.clear()
            window.location.assign('../../index.html')
        }
    }
}