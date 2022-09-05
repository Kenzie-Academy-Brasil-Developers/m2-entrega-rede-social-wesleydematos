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

static async buscandoPosts(){
    const array = await Api.buscaPosts()
    const result = array.results

    result.forEach(element => {
        this.renderizaPosts(element)
    })
}

static async renderizaPosts(array){
    let sessaoPosts = document.querySelector('.section__posts')

    let article = document.createElement('article')
    let divPerfilInfo = document.createElement('div')
    divPerfilInfo.classList.add('pefil__info')
    let divPerfilFoto = document.createElement('div')
    divPerfilFoto.classList.add('perfil__foto')
    let image = document.createElement('img')
    image.src = array.author.image
    image.alt = `Imagem de ${array.author.username}`
    let divNomeCargo = document.createElement('div')
    divNomeCargo.classList.add('nome__cargo')
    let tagH2Nome = document.createElement('h2')
    tagH2Nome.innerText = array.author.username
    let tagPCargo = document.createElement('p')
    tagPCargo.innerText = array.author.work_at
    let tagH2Titulo = document.createElement('h2')
    tagH2Titulo.innerText = array.title
    let tagPcontent = document.createElement('p')
    tagPcontent.innerText = array.description
    let tagDiv = document.createElement('div')
    let buttonAbrirPost = document.createElement('button')
    buttonAbrirPost.innerText = 'Abrir Post'
    buttonAbrirPost.classList.add('abre__post')
    let spanLike = document.createElement('span')
    spanLike.classList.add('like__span')
    let spanQntLike = document.createElement('span')
    spanQntLike.innerText = array.likes.length

    article.append(divPerfilInfo, tagH2Titulo, tagPcontent, tagDiv)
    divPerfilInfo.append(divPerfilFoto, divNomeCargo)
    divPerfilFoto.appendChild(image)
    divNomeCargo.append(tagH2Nome, tagPCargo)
    tagDiv.append(buttonAbrirPost, spanLike, spanQntLike)

    sessaoPosts.appendChild(article)

    buttonAbrirPost.addEventListener('click', (event) => {
        event.preventDefault()

        this.criaModal(array)

        let modalPost = document.querySelector('.modalPost')
        modalPost.style.display = 'flex'
    })

    let spanModal = document.getElementById('closeModal')
        spanModal.addEventListener('click', () => {
        let modalPost = document.querySelector('.modalPost')
        modalPost.style.display = 'none'
    })

    spanLike.addEventListener('click', async () => {
        spanLike.classList.toggle("curtido")
        
        if(spanLike.classList[1] == "curtido"){
            spanQntLike.innerText = array.likes.length + 1

            let idPost = {
                'post_uuid': array.uuid
            }
            
            await Api.buscaLikes(idPost)
        } else if (!spanLike.classList[1]){
            let id = array.likes
            Api.deslike(id)
            spanQntLike.innerText = array.likes.length
        }
    })
}

static async criaModal(array){
    let imagemModal = document.getElementById('imagemModal')
    let nomeModal = document.getElementById('nomeModal')
    let cargoModal = document.getElementById('cargoModal')
    let tituloModal = document.getElementById('tituloModal')
    let conteudoModal = document.getElementById('conteudoModal')

    imagemModal.src = array.author.image
    imagemModal.alt = `Imagem de ${array.author.username}`
    nomeModal.innerText = array.author.username
    cargoModal.innerText = array.author.work_at
    tituloModal.innerText = array.title
    conteudoModal.innerText = array.description

}

}

BotoesDashboard.postar()
BotoesDashboard.sair()
BotoesDashboard.voltaLogin()
Dashboard.buscaUsuarios()
Dashboard.renderizandoUserLogado()
Dashboard.buscandoPosts()