 //funçao valida nome 
function nomes(){
     let nome = "welik";

     if(nome == "welik"){
      console.log("O nome é welik , esta certinho");
     }else{
      console.log("O nome é diferente de welik");
     }

}

nomes();

//funçao valida numero

function numeros(){
  let numero = 11981682180;

  if(numero == 11981682181){
console.log("esta certo o numero");

  }else{
    console.log("esta errado o numero");
  }
}
numeros();

// teste de idade 

let idade = 18;

if(idade >= 18 ){
   console.log("Você é maior de idade");
}else{
  console.log("voce é menor de idade");
}

// função de validar senha 

function validarSenha(){
  let senha = "123455678";

if(senha === "12345678"){
  console.log("senha esta correta")
}else {
  console.log("senha errada");
}

}

validarSenha();

// criando uma função 

function validarInformacoes(){
  let nome = "wlik";
  let idade = 18;
  let aniversario = "04/08/1999";

  if(nome === "welik" && idade === 18 && aniversario === "04/08/1999"){
    console.log("Todas as informações estão corretas");

  }else if(nome != "welik"){
    console.log("O nome está incorreto");

  }else if(idade != 18){
    console.log("A idade está incorreta");
    
  }else{
    console.log("O aniversário está incorreto");
  }
}

validarInformacoes();