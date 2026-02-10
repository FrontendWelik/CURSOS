/* pilares do emcapsulamento
esconder detalhes da implementação , dando segurança a sua aplicação
o Encapsulamaneto serve para controlar o acesso aos atributos e metodos de uma classe */

// Pilar - Encapsulamento


class Carro{
    constructor(){
        this.modelo = "gol"
        this.cor = "vermelho"
    }

    frear(){
       console.log("parar o carro")
    }
}

const carro = new Carro()
carro.frear()

const filtro = new Filtro()
filtro.pretoEBranco(imagem)


// Encapsulamento , controle de acesso e getters e setter


