function contarQuantidadesLetras( produto ){
    try {
        console.log(produto.nome.length)
    } catch(erro){
        console.log("erro ao processar")// colocando uma mensagem de erro na aplicação para poder falar sobre o erro 
        tratarErro(erro)
    }finally{
        console.log("finally é sempre executado com erro ou nao")
    }

}

function tratarErro( erro ){
    throw new Error("teste de erro")
}

const produto = {
    nome: "notebook",
    preco: 1200
}

contarQuantidadesLetras(produto)