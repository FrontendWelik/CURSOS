//Herança - Reutilização e manutenção 
// classe Cão e Passaro 
// Herança da classe 

class Animal{
     constructor(){
        this.cor = ""
        this.tamanho = 0
        this.peso = 0
    }
    correr(){
        console.log("correr")
    }
     dormir(){
        console.log("Dormindo")
    }

}
class Cao extends Animal{// extends = extender a classe animal ao cao 
   
     latir(){
        console.log("correr")
    }
}



class Passaro extends Animal{
   

    voar(){
        console.log("Voando")
    }
}

class Papagaio extends Passaro{
    falar(){
        console.log("falando")
    }
}


const cao = new Cao()
const passaro = new Passaro()
const papagaio = new Papagaio()

papagaio.dormir()//herdado de Animal
papagaio.voar()//herdado de passaro

cao.correr()

passaro.correr()
passaro.cor = "azul"
console.log(passaro.cor)
