// Factory - design Pattern (padrao de design ou padrao de projetos)
// Padrão de projetos -> forma comun de resolver problemas 


const produto1 = {// objeto 1 
    nome: "Notebook",
    preco: 1200
}

const produto2 = {// objeto 2 
    nome: "Notebook",
    preco: 2000
}
                            //definindo parametro para a função , os valores desses parametros serao definidos na constante definida do objeto
const ProdutoFactory = function(nome,preco){// criar objetos apartir dessa função 

    // voce quer pegar dados da internet , ate utilizando uma API por exemplo


    return{
       nome,
       preco,
       recuperAvaliacoes(){//passando um metodo 
          console.log(`Avaliaçoes para ${this.nome}, e o preço : ${this.preco}`)
       }
    }
}

const produto = ProdutoFactory("Notebook",1200)// aqui sera onde os valores dos parametros serao definidas 
produto.recuperAvaliacoes()





