// notaçao literal
/*
const hotel = {
quartos:20,// atributos ou propriedades
ocupados:10,// atributos ou propriedades
verificarDisponivel: function(){
    let res = this.quartos - this.ocupados
    return "Disponiveis: " + res
    
}
}
hotel.verificarDisponivel()//ponto (.) = operador de membro 
*/  

// notaçao de contrutir (objeto em branco)

/*
const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10 
hotel.disponivel = function(){
    let res = this.quartos - this.ocupados
    return "Disponiveis: " + res
}
hotel.disponivel()
*/


//criando classes (mais simples) criando classe voce pode criar seu Objeto personalizado

class Hotel {

    contructo(){
        // configurar os atributos
        this.quartos = 20
        this.ocupados = 10

    }

    veficarDispo(){
         let res = this.quartos - this.ocupados
         return "Disponiveis: " + res
    }

}

const hotel = new Hotel()
hotel.quartos = 10
console.log(hotel.quartos)