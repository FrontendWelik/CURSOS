/*
para exibir um texto e um numero ao lado do outro 

o + é utlizado para concatenar um texto e um numero 
*/

const nome = 'welik'
const idade = 26;



// criando um taplate instring
//`${ } =  permite que dentro da string eu subistitua o valor por umavariavel`
// dentro das chaves voce consegue utilizar 
/* jeito antigo de fazer console.log(nome + " " + idade);*/

// melhor forma de fazer taplateString
const texto = `bem vindo ${nome} voce tem ${idade}`;

console.log(texto)