let nome = " carro do welik"
// nome.length mostra a qunatidade de caracteres que tem na string 
//nome.charAt() colocar a posição dessa string no caso pegar letra por letra no caracter da sua posição ex = 0 = w , 1 = e
//nome.replace() ele vai substituir esa string , prieiro parametro oque vai ser substituido , segundo parametro oque vai ficar no lugar 
//let n = nome.replace("welik", "revolta") ele pega o nome faz a alteração e retorna para uma nova variavel
/*console.log(n)*/

let frase = "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo"
let n = frase.substring(0,25) + "..." // da para ser utilizado para esconder um texto e depois fazer ser mostrado a seguinte
console.log(n) 


let nome2 = "welik carlos "
let resultado = nome2.split("-")// voce precisa passar oque voce quer utilizar para separar essas string 
console.log(resultado[0])



let nome3 = "welik"
let sobrenome = "carlos"
let r = sobrenome.slice(0,6)// mesma coisa que substring
//podendo fazer a junção ate para a criação de um e-mail como exemplo
console.log(nome3 + r + "@empresa.com.br")

let nome4 = "pedro Silva"// utilizando dois metos um para letras maiusculas outro para minusculas
nome4.toUpperCase()//maiuscula
nome4.toLowerCase()//minuscula
console.log(nome4.toUpperCase())


let otNome = "fernads    "
otNome.trim()//ele remove os spaços laterais da string 

let a = "ola"
let b = "welik"
let c = "cara"

let s = a.concat(" ",b," ",c) //concatenar as string por parametro
console.log(s)
