//porque aprender sobre Prototype?
/**
 * nao existe classe em javascript , sao apenas um Syntax sugar, baseado em prototipos 
 * trabalhar com codigos que utilezem prototypes 
 * se voce quer criar um objeto bmw , voce cria uma classe bmw , estabele uma relação de herança (extends)
 * em seguida voce tem o objeto carro e o atributo placa 
 * descententes de Objetc
 * Object.prototype
const obj = {

}
console.log(obj.__proto__ )
console.log(obj.__proto__ == Object.prototype)
 */

Object.prototype
const obj = {

}
console.log(obj.__proto__ )
console.log(obj.__proto__ == Object.prototype)




class Carro{
    constructor(){
        this.placa = "AMP-1230"
    }
}
class Bmw extends Carro{
    constructor(){
        super()
        this.nome = "BMW 320i"
    }
}

const objBmw = new Bmw()
console.log(objBmw.placa)
console.log(objBmw.nome)



//encadeamento de objetos , Prototype Chain
const veiculo = {
    motor: "50 cavalos"
}

const carro = {
    placa: "WLK-1020",
    __proto__:veiculo,// prototipo , forma de herença no metodo __proto__
    acelerar: function(){
    console.log("acelerar")
    }
}

const bmw = {
    nome: "bmw-ia20",
    __proto__:carro// prototipo , forma de herença no metodo __proto__
}

console.log(bmw.placa)
bmw.acelerar()
console.log(bmw.motor)