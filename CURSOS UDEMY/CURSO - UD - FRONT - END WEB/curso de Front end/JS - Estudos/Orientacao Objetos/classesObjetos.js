// Objeto
const hotel = new Object()
hotel.quartos = 20;
hotel.ocupados = 10;
hotel.disponivelQuartos = function(){
       let resp = this.quartos - this.ocupados;
       console.log("disponiveis em OOP " + resp)
    }

hotel.disponivelQuartos();


//Criando classes (mais simples )
// primeiro voce cria a classe ai voce consegue instanciar o objeto e com o objeto
// voce consegue trabalhar

class Casas{// é a planta da casa 

    constructor(){
         this.quartos = 20
         this.ocupados = 2
    }

    disponibilidade(){
        let resultado = this.quartos - this.ocupados
        return "disponiveis com classes " + resultado
    }

}

//instanciar a classe
const casas = new Casas()
casas.disponibilidade()
console.log(casas.disponibilidade())

//pegue a classe gere um objeto e assim que voce consegue acessar os atibutos do objeto