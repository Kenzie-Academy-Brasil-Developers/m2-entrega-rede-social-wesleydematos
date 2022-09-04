export class Api{

    static baseUrl = 'https://m2-rede-social.herokuapp.com/api'
    static token = localStorage.getItem('@redeSocial:token') || ''
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
}