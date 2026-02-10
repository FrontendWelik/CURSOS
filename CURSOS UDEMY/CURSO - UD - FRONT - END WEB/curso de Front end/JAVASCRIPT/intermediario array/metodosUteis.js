const estados = ["Sao Paulo","Ceará","Rio de Janeiro","Bahia","Minas Gerais"]

/*** Remover elementos de Array  ***/

estados.pop()//remover o ultimo elemento do Array

estados.shift()//remove o primeiro elemento do array

estados.unshift("Feijao")//ele adiciona ao inicio do array



/*** Retornam elementos de Array  ***/

const novo = estados.splice(0,2,"teste2","teste1") //fazer uma emenda no array

console.log(estados)

/*** converter Arra para String e depois voltar ela a ser Array  ***/

const usuarios = ["welik","carlos","luis"]
let texto = usuarios.join()//ele pega a array e converte eum um texto
let arrayTexto = texto.split()//voltando a ser um array 
console.log(texto)





