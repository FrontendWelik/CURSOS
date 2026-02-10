// objetos literais 
// simulação de cadastro de nome e preço 

let nome = "Notebook"
let preco = 1200
 
//criar um objeto para cuidar dessas informaçoes 

const produto = {
    nome: nome,
    preco: preco,
    exibirProduto : function(){
        console.log(`${this.nome},${this.preco},${this.categoria}`)
    }
}


const pro = produto
pro.preco = 2000
console.log(pro.preco)

/*
produto.categoria = "eletronicos"// acrecentando metodo sem a necessidade de crialo dentro da const
produto.exibirPreco = function(){
    console.log(`Preço: ${this.preco}`)
}
produto.exibirPreco()

produto.exibirProduto()
console.log(produto.nome)
*/