// funçoes construtoras - encapsulamanto 

const Hotel = function(){// criando um objato com funções 
    this.nome = "Hotel do welik"// nome do meu hotel
    this.quantidadeSuites = 30
    let suiteOcupadas = 26// forma de fazer com que o valor nao seja acessado e modificado 

    this.reservar = function(){//crinado outra funçao para meu objeto
 
        if(suiteOcupadas < this.quantidadeSuites){/*
            se minhas suites ocupadas forem menores do que a quantidade de suite , rode o programa , se nao esta ocupada 
            */ 

            suiteOcupadas++// acrecentando quando meu objeto ser chamado , cada ves ele acrecenta mais um 
            console.log(" ocupadas: " + suiteOcupadas)
        }else{

            console.log(" estamos lotados ")
        }


        

        
    }

}
const hotel = new Hotel()
hotel.reservar()//chamando meu objeto 
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()




