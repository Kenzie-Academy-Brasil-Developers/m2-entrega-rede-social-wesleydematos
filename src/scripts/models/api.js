export class Api{

    static baseUrl = 'https://m2-rede-social.herokuapp.com/api'
    static token = localStorage.getItem('@redeSocial:token') || ''
    static uuid = localStorage.getItem('@redeSocial:user_uuid')
    static headers = {
        'Content-Type':'application/json',
        Authorization: `Token ${this.token}`
    }

    static async cadastro(body){
        const result = await fetch(`${this.baseUrl}/users/`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: body
        })
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch((err) => console.log(err))

        return result
    }

    static async logar(body){
        const result = await fetch(`${this.baseUrl}/users/login/`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: body
        })
        .then(response => response.json())
        .then(response => {
            if(response.token && response.user_uuid){
                localStorage.setItem('@redeSocial:token', response.token)
                localStorage.setItem('@redeSocial:user_uuid', response.user_uuid)
            }

            let token = localStorage.getItem('@redeSocial:token')
            let user_uuid = localStorage.getItem('@redeSocial:user_uuid')

            if(token && user_uuid){
                window.location.assign('./src/pages/dashboard.html')
            }

            return response
        })
        .catch((err) => console.log(err))

        return result
    }

    static async usuarios(){
        const result = await fetch(`${this.baseUrl}/users/`, {
            method: 'GET',
            headers: this.headers
        })
        .then(response => response.json())
        .catch(err => console.log(err))

        return result
    }

    static async usuarioLogado(){
        const result = await fetch(`${this.baseUrl}/users/${this.uuid}/`, {
            method: 'GET',
            headers: this.headers
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))

        return result
    }

    static async criaPost(body){
        const result = await fetch(`${this.baseUrl}/posts/`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(response => response)
        .catch((err) => console.log(err))

        return result
    }

    static async buscaPosts(){
        const result = await fetch(`${this.baseUrl}/posts/`, {
            method: 'GET',
            headers: this.headers
        })
        .then(response => response.json())
        .catch(err => console.log(err))

        return result
    }

    static async buscaLikes(body){
        const result = await fetch(`${this.baseUrl}/likes/`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(res => console.log('Curtiu', res))
        .catch(err => console.log(err))

        return result
    }

    static async deslike(id){
        const result = await fetch(`${this.baseUrl}/likes/${id}/`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(res => console.log('Deslike', res))
        return result
    }

    static async seguir(body){
        const result = await fetch(`${this.baseUrl}/users/follow/`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(response => response)
        .then(res => console.log('seguindo', res))
        .catch(err => console.log(err))

        return result
    }

    static async paraDeSeguir(id){
        const result = fetch(`${this.baseUrl}/users/unfollow/${id}/`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(res => console.log('excluindo',res))
        .catch(err => console.log(err))

        return result
    }

}