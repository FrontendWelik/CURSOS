 // alert('tudo bem welik caralho a 5 vez vendo isso é pra voce começar a aprender de verdade');
       /*isso tambem é um comentario */

       //var e a declaração de um valor 
       //hora e saudacao sao os nomes dos valores
       //if é uma função e dentro dos parenteses é as intruçoes do if 

       var hora = new Date().getHours()
       var saudacao

       

       if(hora < 12){
             saudacao = "bom dia "
       }else if(hora < 18){
            saudacao = "boa tarde "
       }else{
        saudacao = "boa noite "

       }

       document.getElementById("mensagem").innerHTML = saudacao;

       //document = voce pega o documento
       //getElementById() = ele pega o elemento ID
       //innerHTML = ele pega o elemnto do html e para poder sobrescrever em cima dele 
