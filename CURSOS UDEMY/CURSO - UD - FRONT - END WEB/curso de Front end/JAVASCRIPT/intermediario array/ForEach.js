const lista = ["welik","carlos","luiz","Alycia",]
/*
for(indice in lista){// ele pega oque esta dentro de lista 
  console.log(lista[indice])
}
  */

const percorrer = function(item,indice,array){//parametro que podemos definir que vai pegar o item = valor , indice = indice , array = lista
    //isso é quando a função ser executada ele vai percorrer pelos parametro que eu coloquei 
    console.log(item,indice,array)//aqui na chamada voce escolhe o parametro que vai ser chamado , indice , array , item
}
//ele esta dentro do array atraves do lista e percorrendo os valores dela atrves da funçao que esta como paremtro dentro do ForEach
lista.forEach(percorrer)//passar o pametro do metodo a função no caso percorrer

