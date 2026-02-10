// essas funçoes sao chamadas pos determinadas processamentos , elas sao passadas como parametro para outras funçoes 
/* exemplo quando voce pode ter um botao que ira realizar uma função um processamento 
ele irar processar as informaçoes e ou funçoes e logo a pos que ele realizar poderar ter outra função para que ela seja realizada
uma função como parametro para outra função 
*/


//criar a função que faz o processamento 
function processar(callbackSucesso, callbackErro){// ela vai executar algumas açoes e ela vai demorar , 
//buscando informaçoes e processando elas ex consulta no mercado livre ou buscando as postagens antigas da redes siciais
let resultadoProcessamento = true

if(resultadoProcessamento ){
  callbackSucesso()

}else{
  callbackErro()
}

}


const salvarResultado  = function(){
    console.log("Salvar resultado")
}


const erro  = function(){
    console.log("erro")
}
processar(salvarResultado,erro)// esse parametros dentro da chamada da função processar os valores dentro dele representam 
//callbackSucesso, callbackErro que sao os parametros dentro da função processar 
/* e como se a primeira função fosse a minha declaraçao de valor , e dentro de chaves onde fosse armazenar os meus valores 
a primeria e segunda funçoes seguintes , sao os valores e serao atribuidos depos como na chamada 
function processar(callbackSucesso, callbackErro)
                  ( chamarResultado, erro )
*/