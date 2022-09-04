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
}