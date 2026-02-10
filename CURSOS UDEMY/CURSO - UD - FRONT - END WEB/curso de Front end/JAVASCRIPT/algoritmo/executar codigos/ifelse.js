// estruturas condicionais
// if ( condição ){  codigo a ser executa referente a condição verdadeira}
/*
verificar idade 
verificar se a compra é maior que o minimo
verificar se tem acessoa recursos pagos

*/
// quero descobrir se uma pessoa é maior de 18 anos

/*
let idade = 18 
if( idade >= 18 && idade <= 25){
   console.log("maior de idade");
}
*/

/*
let idade = 50;
let compras = 10;

if(idade >= 40 || compras >= 400){
     console.log("tem desconto");
}else{
    console.log("nao tem direito a desconto");
}
*/

let opcao = 2;

if(opcao == 1){
    console.log("saldo conta");

}else if(opcao == 2){
  console.log("cartao de ccredito");

}else if(opcao == 3){
  console.log("descontos indevidos");

}else{
    console.log("opção invalida");
}