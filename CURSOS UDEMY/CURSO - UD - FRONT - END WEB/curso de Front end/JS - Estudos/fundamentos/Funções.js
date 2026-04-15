
/* desligar a torneira */
function desligarToneira(){
    console.log("Torneira desligada");
}
desligarToneira();



/*pedir copo dagua */
let copoDagua = "aqui esta seu copo de agua";

function pedirCopoDagua(){
    return copoDagua

}
console.log(pedirCopoDagua());




/*ir ao mercado comprar arroz */

let arroz = "aqui esta seu arroz";
let preco = 30;
let dinheiro = 50;
let troco = dinheiro - preco;

function comprarArroz(){
    if(dinheiro >= preco){
      return arroz + " e seu troco é " + troco;
    };
}
console.log(comprarArroz());