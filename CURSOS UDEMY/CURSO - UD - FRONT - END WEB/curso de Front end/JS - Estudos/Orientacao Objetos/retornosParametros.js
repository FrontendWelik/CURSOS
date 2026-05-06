class Usuario{
    constructor(){
        this.email = "",
        this.senha = ""
    }
    logar(){
        let emailBD = "ja@gmail.com"
        let senhaBD = "1234"

        if(senhaBD === this.senha){
            console.log("senha valida")

        }else{
            console.log("senha invalida")
        }
    }
}

const usuario = new Usuario()
usuario.email = "ja@gmail.com"
usuario.senha = "1234"

usuario.logar()