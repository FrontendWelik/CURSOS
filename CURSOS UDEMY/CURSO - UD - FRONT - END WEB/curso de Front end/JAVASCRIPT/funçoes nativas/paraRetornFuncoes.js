/*
function somar(numero1, numero2){
    //funçao nativa = sao recursos para ser utilizado junto com js 
    //isNaN = isso é uma funçao para verificar se náo é um numero
    numero1 = isNaN(numero1) ? 0 : numero1
    numero2 = isNaN(numero2) ? 0 : numero2
    return numero1 + numero2
}

//NaN = not a number = nao é um numero 
// o mais tbm é utilizado para concatenar , isso é ele pode juntar numeros e strings 
somar(2,10)
console.log(somar(2, "welik"))

*/

/*
//valores padrão do es2015

function somar(numero1=0, numero2=0){
    //funçao nativa = sao recursos para ser utilizado junto com js 
    //isNaN = isso é uma funçao para verificar se náo é um numero
    
    return numero1 + numero2
}
*/


//Paramtros e retornos opcionais

function calcularSalario(salario, desconto){
   // desconto = isNaN(desconto) ? 0 : desconto
   if( salario == 0){
       console.log("Salario nao informado")
   }else{
      return salario - desconto
   }
    

}

let resultado = calcularSalario(100,20)
console.log(resultado)



















