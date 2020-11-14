var title = document.querySelector(".title")
title.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")

for(var i=0; i<pacientes.length; i++){
    peso = pacientes[i].querySelector(".info-peso").textContent
    altura = pacientes[i].querySelector(".info-altura").textContent
    imc = pacientes[i].querySelector(".info-imc")

    calcImc = calculaImc(peso, altura)
    
    if(peso<=0 || peso>=1000){
        imc.textContent = ("peso inválido!")
        pacientes[i].classList.add("campo-invalido")
    }
    else if(altura<=0 || altura>=3){
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