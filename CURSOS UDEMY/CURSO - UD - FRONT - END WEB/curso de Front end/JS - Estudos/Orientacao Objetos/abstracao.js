// pilar 1 abstração
/**
 * modelo , entidade , idedntidade
 * caracteristicas e ações
 */

class Carro{
    constructor(){
        this.marca = "volkswagen",
        this.modelo = "golf",
        this.cro = "branco",
        this.placa = "EMJ-3030"
    }

    ligar(){

    }
}

const carro = new Carro()


class Produto{
    constructor(){
        //roupas
        this.tamanho = "M",
        this.cor = "vermelho",
        this.preco = "45,90",

        //eleltronicos
        this.altuta = "50cm",
        this.largura = "30cm"

    }
}