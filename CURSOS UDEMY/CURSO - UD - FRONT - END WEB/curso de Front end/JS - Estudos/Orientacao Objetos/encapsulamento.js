class Carro{
    constructor(){
        this.modelo = "golf"
        this.cor = "branco"
    }
    frear(){
        console.log("parar o carro")
        // freio tecnologia a disco
        // recursos

    }
}

const carro = new Carro()
carro.frear()


//Encapsulamento, modificadores de acesso e getters e setters
//modificadores de acesso - controlam a visibilidade de atributos e metodos 
// limitar alguns atributos e metodos apenas a classe
// no numero conta nao podemos permetir que qualquer string ou numero possa ser valido para ele 
//exemplo - private, protected e public

//simular um controle bancario
class ContaBancaria{
    constructor(){
        this._numeroConta = 0 // anderline - para não mexer no valor diretamente 
        this.saldo = 0
    }
    // metters e getters - são metodos especiais na POO usados para acessar = GET e modificar = SET 
    // Eles permitem controlar como os dados são lidos ou alterados 



    get numeroConta(){
        return "numero: " + this._numeroConta
    }

    set numeroConta( numero ){
       if(numero > 0){
         this._numeroConta = numero
       }

    }
}

const conta = new ContaBancaria()
conta._numeroConta = 50

console.log(conta.numeroConta)
