function contarQuantidade( produto ){
    try{//tentar
        console.log(produto.none.length)
        console.log("teste")
      
    } catch(error){// caputura o erro quando o texte falhar 
          console.log("erro: 404")

    } 
    /*
    finally{// uma mensagem sempre no final do teste e erro 

    }
    */
}

const produto ={
    nome: "welik",
    idade: 26,
}

contarQuantidade(produto)

