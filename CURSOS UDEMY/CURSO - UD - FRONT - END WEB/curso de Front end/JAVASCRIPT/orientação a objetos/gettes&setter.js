
// Encapsulamento ,modificadores de acesso e getters e setter
//consultar saque de conta bancaria 
class ContaBancaria {
    constructor(){
        // private , protected e public 
        this._numeroConta = 0
        this.saldo = 0
    }

    get numeroConta(){
        //verificar se o usuario esta logado

        return this._numeroConta
    }

    set numeroConta( numero ){
        if( numero > 0){
          this._numeroConta = numero 
        }
        
    }
}

const conta = new ContaBancaria()
conta.numeroConta = 60

console.log(conta.numeroConta)