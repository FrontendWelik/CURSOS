/* 
atributos : cor, tamanho , peso
açoes: corre, dormir,
classe animal com atributos comuns - cor tamanho e peso
classe cao - latir
classe passaro - voar 
 */

// Heranças - reutilização e manutenção
//classe passaro cao 

class Animal {  // defindo a class Animal como se ela fosse a classe pai , e as outras classes vao erdar seus atributos
    // super classe , onde as subclasse herdam seus atributos , cao e passaro sao exemplos de subclasses 
    constructor(){
        console.log("contructor animal ")
        this.cor = ""
        this.tamanho = 0
        this.cor = 0

    }
    correr(){
        console.log("correr")
    }

    dormir(){
        console.log("dormindo")
    }

}

class Cao extends Animal{ // esta herdando os atributos da classe pai com a palavra chave extends
     constructor(){
        super()//ele tem o objetivo que voce acesse recursos da classe pai 
        this.tamanhoOrelha = 0
        
    }


    latir(){
        console.log("latindo")
    }
}

// separando as linhas entre passaro e cao 

class Passaro extends Animal{// classe filha que herda os atributos da classe pai a superclasse 
    voar(){
        console.log("voar")
    }
}

class Papagaio extends Passaro{
   
    falar(){
        console.log("falar")
    }
}


//Instancia

const cao = new Cao()
const passaro = new Passaro()
const papagaio = new Papagaio()

papagaio.voar()

cao.correr()
passaro.cor = "amarelo"
console.log(passaro.cor)

papagaio.falar()
cao.tamanhoOrelha()


/*
cao.correr()
cao.latir()

passaro.correr()
passaro.voar()

*/