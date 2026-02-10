const data = new Date()

data.toString()
let d = data.getDate()//ele recupera o dia para a data
let m = data.getMonth() + 1//ele pega o mes porem ele conta da forma onde se inicia do 0 entao o mes 0 é janeiro e assim por diante 
//acrescente o 1 e ele póderar ser corrigido
let a = data.getFullYear()//pega o ano 

console.log(`data: ${d}/${m}/${a}`)

let h = data.getHours()//horas
let mi = data.getMinutes()//minutos
let s = data.getSeconds()//segundos

console.log(`Hora: ${h}/${mi}/${s}`)

