//procedural 

function quartosVerificados(quartos,ocupados){
    let res = quartos - ocupados;
    console.log("disponivel " + res)

}

quartosVerificados(20,5)
let quartos = 20;
let ocupados = 5;


//Orientado a Objetos

const hotel = {
    quartos: 10,
    ocupados: 3,
    disponibilidadeQuartos: function(){
       let resp = this.quartos - this.ocupados;
       console.log("disponiveis em OOP " + resp)
    }
}

hotel.disponibilidadeQuartos();
