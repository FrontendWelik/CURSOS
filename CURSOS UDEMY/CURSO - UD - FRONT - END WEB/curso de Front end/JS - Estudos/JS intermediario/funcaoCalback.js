//criando uma função que faz o processamento e retorna uma informação depois de processar os dados 

function processar(callbackSucesso, callbackErro){

    let resultadoProcessamento = true

    if( resultadoProcessamento ){
        callbackSucesso()

    }else{
        callbackErro()
    }

}

const salvarResultado = function(){
    console.log("salvar resultado")
}

const erro = function(){
    console.log("erro")
}

// o valor desse parametros sao as funções salvar e erro que se encontra em callback da função principal 
processar(salvarResultado, erro)