let nome = "notebook";
let preco = 1200;

const produto = {
    nome: nome,
    preco: preco,
    exibirProduto: function(){
        console.log(`${this.nome},${this.preco}`)
    }
}

produto.exibirProduto()

console.log(produto.nome)