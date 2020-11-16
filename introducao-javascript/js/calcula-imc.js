var title = document.querySelector(".title")
title.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")

for(var i=0; i<pacientes.length; i++){
    peso = pacientes[i].querySelector(".info-peso").textContent
    altura = pacientes[i].querySelector(".info-altura").textContent
    imc = pacientes[i].querySelector(".info-imc")

    calcImc = calculaImc(peso, altura)
    
    if( !validaPeso(peso) ){
        imc.textContent = ("peso inválido!")
        pacientes[i].classList.add("campo-invalido")
    }
    else if( !validaAltura(altura) ){
        imc.textContent = ("altura inválida!")
        pacientes[i].classList.add("campo-invalido")
    }
    else
        imc.textContent = calcImc
}

function calculaImc(peso, altura){
    var imc = 0 
    imc = peso / (altura *altura)
    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso<=0 || peso>=1000)
        return false
    return true
}

function validaAltura(altura){
    if(altura<=0 || altura>=3)
        return false
    return true
}

function validaCamposVazios(paciente, erros){
    if(paciente.nome.length == 0)
        erros.push( "Nome não pode estar em branco" )
    if(paciente.peso.length == 0)
        erros.push( "Peso não pode estar em branco" )
    if(paciente.altura.length == 0)
        erros.push( "Altura não pode estar em branco" )
    if(paciente.gordura.length == 0)
        erros.push ("Gordura não pode estar em branco")
    return erros
}
