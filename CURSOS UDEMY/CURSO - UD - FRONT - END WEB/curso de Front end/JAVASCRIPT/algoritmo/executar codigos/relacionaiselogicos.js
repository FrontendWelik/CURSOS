// criar uma validaçao sobre definir uma idade para poder acessar seu site 
// ou fazer um cupom de desconto a somente para quem gastou um valor determinado no site

/*Operadores relacionais retorna verdadeiro ou falso
== igual a
!= diferente
> maior que 
< menor que 
>= maior igual
<= menor igual
*/

let resultado = 10 == 10;
console.log(resultado);

// validando idade dentro do site


let idade = 25;
let result = idade > 18;
console.log(result);

let pedidoMinimo = 20;
let compraPessoa = 100;
let res = compraPessoa > pedidoMinimo;
console.log(res);

/* Operadores logicos - testa condiçoes com true ou false && e , || ou */


let tado = true && true;// ele rquer que as duas operaçoes sejam verdadeiras 
console.log(tado);

let sultado = false || true;// apenas um unico lado precisa ser verdadeiro
console.log(tado);

let idade2 = 25;
let resultado2 = idade2 >= 18 && idade2 <=40;// nesse caso a validação vem na idade2 que o valor é 25 , 18 é maior ou igual a 25, 40 é menor ou igual a 25
console.log(resultado2);

//usando OU ||

let idade3 = 25;
let totalCompra = 200;
let rel = idade >= 40 || totalCompra >= 200;// ele vai validar um OU outro
console.log(rel);
