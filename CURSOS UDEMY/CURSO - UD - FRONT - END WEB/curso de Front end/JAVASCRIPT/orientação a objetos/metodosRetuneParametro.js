// metodos - parametro e retornos

/* fazendo um teste de valiar senha criando um objeto */

class Usuario{// a classe usuario , qui é definido parametros para o objeto como nesse caso senha e email
    constructor(){
        this.email = ""// esta zerado para receber um valor 
        this.senha = ""
        this.subtotalCompra = 0
    }

    logar(){// um parametro que vai receber uma ação 

        let emailBD = "ja@gmail.com"// ele eta com o valor que foi colocado no banco de dados para poder fazer a validação 
        let senhaBD = "1234"

        if( senhaBD == this.senha){// o if vai pegar os valores e fazer a comparação para ver se é o mesmo valor 
           return "senha valida"// se for ele retorna essa mensagen 
        }else{
            return "senha invalida"// se nao for ele retina essa mensagem 
        }
    }

    calcularDesconto( cupom ){

        let desconto = 0
        if(cupom == "DSC20"){
            desconto = 20

        }else if(cupom == "FESTA10"){
            desconto = 10
        }

        let total = this.subtotalCompra - desconto
        return total

    }
}

const usuario = new Usuario()// o objeto usuario
usuario.email = "ja@gmail.com"// aqui ´e onde o usuario esta colocando o valores para serem comparados 
usuario.senha = "12345"
usuario.subtotalCompra = 500


let mensagem = usuario.logar()// criei uma variavel para receber o valor de usuario e loga par depois chamalo e mostrar em tela o valor dele 
console.log(mensagem)

let totalDesco = usuario.calcularDesconto("DSC20")
console.log(totalDesco)
