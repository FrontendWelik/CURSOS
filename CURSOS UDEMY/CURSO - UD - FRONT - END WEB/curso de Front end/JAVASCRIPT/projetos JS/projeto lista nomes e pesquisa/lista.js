/*
 vamos criar uma lista de nomes com estrutura de repetição
 e criar o botao que carrega a informação que voce quer

*/

/* quando eu clicar no botao carregar quero pegar a lista de nomes 
e exibir na minha interface*/

let nomes = [//array com as informações que seram puxadas
    "welik",
    "carlos",
    "luiz",
    "alicya",
    "suellen",
    "brasil",
    "fernando",
    "barbaros",
    "carlos",
];

function pesquisarNome(){// minha função que no botao html deve ter a função de pesquisar 

    let nomePesquisa = document.getElementById('campoNome').value //let nomePesquisa recebe o valor no ID camponeme
    let intensLista = ''//lista vazia 
    for(indice in nomes){
        let nome = nomes[indice]
         if(nomePesquisa == nome){
           intensLista += `<li class="list-group-item">${nome}</li>`;
         }
    }
    document.getElementById('lista').innerHTML = intensLista;
}

function carregarNomes(){//minha funçao que esta no botao carregar

    let intensLista = '';//variavel que puxa o valor nesse caso sem nada
    for(indice in nomes){//indice in nomes para acessar seus elementos no indicee nome

        let nome = nomes[indice];//
        
        intensLista += `<li class="list-group-item">${nome}</li>`;// adicionando o vaor do HTML
      
    }


    document.getElementById('lista').innerHTML = intensLista;// pegando o id e sobrescrevendo com o itenslista no HTML
}

