//paramtros padroes 

function somar(numero1, numero2){

    // testando pra saber se é um numero e se não for ele ficara no valor padrao 0
    numero1 = isNaN(numero1) ? 0 : numero1
    numero2 = isNaN(numero2) ? 0 : numero2

    return numero1 + numero2

}



/*
somar(2,2)
isNaN() // não é um numero, isso serve para validar um numero isso é se for um numero dara falsa
*/


//versao mais nova de definir um valor padrão 
function somando(numero1=0, numero2=0){

    numero1 = isNaN(numero1) ? 0 : numero1
    numero2 = isNaN(numero2) ? 0 : numero2

    return numero1 * numero2
}


//parametros e retornos opcionais

function calcularSalario(salario, desconto){
    
    desconto = isNaN(desconto) ? 0 : desconto
    return salario - desconto

}


let resultado = calcularSalario(2500, 165)