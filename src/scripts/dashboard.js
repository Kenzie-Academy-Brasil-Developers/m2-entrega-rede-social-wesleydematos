import { BotoesDashboard } from "./botoesDash.js";
import { Api } from "./models/api.js";

class Dashboard{

static async buscaUsuarios(){
    let arrayUsuarios = await Api.usuarios()
    let sugestoes = [arrayUsuarios.results[2], arrayUsuarios.results[4], arrayUsuarios.results[3]]

    sugestoes.forEach(element => {
        this.listaSugestoes(element)
    })
}

static async listaSugestoes(objeto){

    let divSugestoes = document.querySelector('.aside__sugestoes')

    let divAsidePerfil = document.createElement('div')
    divAsidePerfil.classList.add('aside__perfil')
    let divPerfilInfo = document.createElement('div')
    divPerfilInfo.classList.add('pefil__info')
    let divPerfilFoto = document.createElement('div')
    divPerfilFoto.classList.add('perfil__foto')
    let imagemPerfil = document.createElement('img')
    imagemPerfil.src = objeto.image
    imagemPerfil.alt = `foto de ${objeto.username}`
    let divNomeCargo = document.createElement('div')
    divNomeCargo.classList.add('nome__cargo')
    let h2 = document.createElement('h2')
    h2.innerText = objeto.username
    let tagP = document.createElement('p')
    tagP.innerText = objeto.work_at
    let button = document.createElement('button')
    button.innerText = 'Seguir'
    button.classList.add('btn__seguir')

    button.addEventListener('click', async (event) => {
        event.preventDefault()
        button.classList.toggle('btn__seguir')
        button.classList.toggle('btn__seguindo')
        
    
        if(button.classList == 'btn__seguindo'){
            const body = {
                'following_users_uuid':objeto.uuid
            }
            await Api.seguir(body)

        } else {
            this.pararSeguir()
        }
    })

    divAsidePerfil.append(divPerfilInfo, button)
    divPerfilInfo.append(divPerfilFoto, divNomeCargo)
    divPerfilFoto.appendChild(imagemPerfil)
    divNomeCargo.append(h2, tagP)

    divSugestoes.append(divAsidePerfil)
}

static async pararSeguir(){
    const arrayUsuarios = await Api.usuarios()
    const usuarios = arrayUsuarios.results
    let id = ''

    usuarios.forEach(element => {
        if(element.following.length != 0){
            id = element.following[0].uuid
        }
    })
    Api.paraDeSeguir(id)
}

static async renderizandoUserLogado(){
    let user = await Api.usuarioLogado()

    let fotoUserLogado = document.getElementById('fotoUserLogado')
    fotoUserLogado.src = user.image
    fotoUserLogado.alt = `Foto de ${user.username}`
    let nomeUserLogado = document.getElementById('nomeUserLogado')
    nomeUserLogado.innerText = user.username
    let cargoUserLogado = document.getElementById('cargoUserLogado')
    cargoUserLogado.innerText = user.work_at
    let seguidoresUserLogado = document.getElementById('seguidoresUserLogado')
    seguidoresUserLogado.innerText = `${user.followers.length} seguidores`
}

}
let user = await Api.usuarioLogado()



BotoesDashboard.postar()
BotoesDashboard.sair()
BotoesDashboard.voltaLogin()
Dashboard.buscaUsuarios()
Dashboard.renderizandoUserLogado()