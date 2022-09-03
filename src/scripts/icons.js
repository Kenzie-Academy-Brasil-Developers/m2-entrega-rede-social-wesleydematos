export class Icon{

    static limpaInput(span, input){

        span.addEventListener('click', ()=> {
            input.value = ''
        })
    }


    static mostraSenha(span, input){

        span.addEventListener('click', ()=> {
            if(input.type === "password"){
                input.type = 'text'
                span.classList.toggle("hide")
            } else{
                input.type = 'password'
                span.classList.toggle("hide")
            }
        })
    }
}

