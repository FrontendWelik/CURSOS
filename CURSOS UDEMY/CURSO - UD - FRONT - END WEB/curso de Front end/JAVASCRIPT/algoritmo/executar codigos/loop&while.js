/* estruturas de repetiçoes 

para criar um algoritimo voce vai prcisar criar uma sequencia de passos para que ele rode
exemplo comer pizza:

- pegue a faca  
- corte a pizza no pedaço que dela 
- deixe a faca de lado
- depois retire o pedaço que cortou da  pizza
- coloque num prato 
- depois coma a pizza

se quiser ser repetido deve-se utilizar uma restrutura de repetição como while e loop 

onde podemos utilizar os loops - 

eles podem ser utlizados dentro de postagens de redes sociais 
*/

// ele tem uma condição que sera executada emquanto ela for verdadeira


//regra do while sempre tenha um final para que o loop nao rode para sempre

let numero = 1;// inicia-se com o esse codigo que define o valor com 1
//depois roda o while que vai nas condiçoes definidas por voce
while(numero <= 4){// condição em qunato o numero for menor que 4 rode a função
//ele vai entrar aqui e rodar a função que voce defil a ela 
    console.log("comeu pedaço pizza" + numero);

    numero = numero + 1;/* como na condição ele aina é menor nos atribuimos mais 1 pra ele rodando no loop
    para que quando chege ate 4 o loop acabe*/
}


// criando um exemplo de postagens de redes sociais 
//esse exmplo sera utilizado com array

let postagens = [
    'estou estudando aqui o',
    ' criando codigos aqui o ',
    ' sempre mexendo com tecnologia aqui ooo',
    ' estudar nao é mole nao em rapaziada ',
    ' ta dificil mais vou conseguir uma hora',
    'olha a panelaaaaaaaa',
    ' arroz fe3ijao e carne tudo que eu nao tenho',
    "o ultimo elemento"
]

//criando uma estrutura para poder deixar ilimitado o numero de posts usando o const totalPost
const totalPost = postagens.length
console.log(totalPost);
// ele vvai receber o valor de postagen adicionado o length

let numero2 = 0;// a minha condição vai se comparar com esse valor , que vai ser comparado ao total de posts 
while(numero2 < totalPost){// na minha condiçao eu defino que em qunato ela or menor ao numero 7 ela roda, e como o numero a ser medido é 0 
    console.log("IMAGEM " + numero2);// estou chamando junto a um texto o valor de numero 2 que dentro aqui ele vai rodar ate 7 vezes
    console.log(postagens[numero2]);// ee vai pegar oqie esta no array e oque esta em numeros e chamalados sequencialmente ate acbar o loop
    console.log("----------------------");
    numero2 = numero2 + 1;// agregando mais um mnumero para que o loop soma e realize o loop , e nao seja infinito
}