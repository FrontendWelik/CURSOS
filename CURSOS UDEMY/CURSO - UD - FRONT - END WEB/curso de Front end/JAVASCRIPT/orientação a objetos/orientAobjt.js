/* baixo nivel proximo a maquina alto nivel proximo a linguagem humana
POO - programação a orientada a objetos
uma maneira diferente de pensar 
qual o objetivo da progamaçao orientada a objetos?
aproximar o mundo digital do mundo Real
propriedades - oque o objeto é (suas caracteristiscas )

e como eu posso criar um objeto ?
objetos agrupam conjunto de variaveis e funçoes para criar um modelo de algo
que voce reconheceria no mundo real , em um objeto variaveis e funçoes assumem novos nomes
*/
/*
EXEMPLO:

const hotel ={       propriedades sao variaveis
nome:"Hotel Welik",
quartos:32,
ocupados:20,
piscina:true,
tiposQuartos['Casal','Solteiro','Familia'],

verificarDisponibilidade: function(){  metodo é uma função
return this.quartos-this.ocupados
   }

}

*/


/*JS é multi paradigma - a forma que voce soluciona os problemas usando Programação*/

//Procedural
/*
function disponivel(q,o){
   let res = q - o
   console.log("disponiveis  " + res)
}

let quartos = 20
let ocupados = 5
disponivel(quartos,ocupados)
*/
//Orientado a objetos

const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarQuartos: function(){
       let res = this.quartos - this.ocupados
       console.log(res)
    }
}


hotel.verificarQuartos()
