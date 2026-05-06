class Usuario{
    constructor(){
        this.email = "",
        this.senha = "",
        this.subtotalCompra = 0
    }
    logar(){
        let emailBD = "ja@gmail.com"
        let senhaBD = "1234"

        if(senhaBD === this.senha){
            return "senha valida";

        }else{
            return "senha invalida"
        }
    }

    calcularDesconto(cupom){

        let desconto = 0
         
        if(cupom == "DESC20"){
             desconto = 20
        }else if(cupom == "FESTA10"){
            desconto = 10

        }

        return this.subtotalCompra - desconto
    }
}

const usuario = new Usuario()
    usuario.subtotalCompra = 250;
    usuario.calcularDesconto( "DESC20")

    let total = usuario.calcularDesconto("DESC20");
    console.log(total)




  /*

const usuario = new Usuario()
usuario.email = "ja@gmail.com"
usuario.senha = "1234"

let mensagem = usuario.logar();
console.log(mensagem)

// validar cupon 

*/