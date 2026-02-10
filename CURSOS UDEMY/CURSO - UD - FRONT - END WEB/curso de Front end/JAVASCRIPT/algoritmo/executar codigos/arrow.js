/* funçoes anonimas e Arrow */

//função literal

function somar(a,b){
    console.log(a+b)
}
somar(1,2)

//anonima

const mais = function(c,d){
    console.log(c+d)
}
mais(4,4)

// arrow

const flecha = (e,f)=>{
     console.log(e+f)
}
flecha(2,2)

//arrow retorno implicito

const flexa2 = (w,z) => console.log(w+z)
flexa2(1,1)