//array nomes
let nomes = ['welik','carlos','Alycia','Benjamin'];
console.log(nomes[0]);

// acrescentando um item no array
nomes.push("nome adicionado");
console.log(nomes);
// e mudar o item dentro do array
nomes[1] = "novo nome";
console.log(nomes);
//deletar um item
delete nomes[3];
console.log(nomes);


//array numeros 
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros[1]);


// array misto
let misto = ['welik', 26, true, 'carlos', 30, false];
console.log(misto[0]);

// array de objetos
let Objetos = [
    { 
      nome: "welik",
      idade: 26, 
      aniversario: "04/08/1999" 
    },
    {
        nome: "carlos"
    }
]

console.log(Objetos[1].nome)