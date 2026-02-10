//pilar 1 - Abstração 

/*
Modelo, Entidade , Identidade , caracteristicas e Ações
*/ 

class Carro{
    constructor(){
        this.marc = "volkswagen",
        this.modelo = "gol",
        this.cor = "prata",
        this.placa = "EMJ-2002"
    }
    ligar(){

    }
}

const carro = new Carro()
carro.modelo = "golf"
console.log(carro.modelo)

//loja virtual

class Produto {
    constructor(){
      //roupas
      this.tamanho = "M"
      this.cor = "vermelho",
      this.preco = "45,90",

      //eletronicos
      this.altura = "50cm",
      this.largura = "30cm"


    }
}