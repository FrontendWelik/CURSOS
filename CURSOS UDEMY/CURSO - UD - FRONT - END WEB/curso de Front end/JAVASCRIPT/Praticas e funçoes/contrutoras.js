// funçoes construtoras 

const Hotel = function(){// criando um objato com funções 
    this.nome = "Hotel do welik"// nome do meu hotel
    this.quantidadeSuites = 30
    this.suiteOcupadas = 15

    this.reservar = function(){//crinado outra funçao para meu objeto
        this.suiteOcupadas++// acrecentando quando meu objeto ser chamado , cada ves ele acrecenta mais um 

        console.log(" ocupadas: "+this.suiteOcupadas)
    }

}
const hotel = new Hotel()
hotel.reservar()//chamando meu objeto 
hotel.reservar()
hotel.reservar()


