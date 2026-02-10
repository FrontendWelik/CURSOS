//criando a funçao do botao click - ao criar a funçao o nome dela deve ser colocado no onclick do botao
function calcularMelhorPreco(){
    // validar o campos 

    // defindo uma variavel o nome da varialvel e seu valor documento que pega o ID no html
    let precoAlcool = document.getElementById('alcool').value; //value capitura o valor que esta dentro do que vai ser pego no HTML
    let precoGasolina = document.getElementById('gasolina').value;

    //verificar se o preço do alcool esta vazio
    if(precoAlcool != ""){// essa validaçao serve para o alcool 
    if(precoGasolina != ""){// essa validação serve para a gasolina e so sera feita se ela validar o alcool e 
        // nao estiver preenchido o campos que necessita

        //calcular
        /*Calcular se é melhor usar alcool ou gasolina
        se valorAlcool / valorGasolina >= 0.7 é melhor
        utilizar Gasolina - senão é melhor o alcool */

        let resultado = precoAlcool / precoGasolina;
        if( resultado >= 0.7){
            //ele me permite configurar um valor do elemento ID colocando outro valor no lugar
            document.getElementById("resultado").innerHTML = "melhor utilizar gasolina";
        }else{
            document.getElementById("resultado").innerHTML = "melhor utilizar alcool";
        }

    }else{
        alert("preencha o preço d gasolina")
    }
            
    }else{
    alert("preencha o preço d alcool")
    }


}