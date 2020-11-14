var title = document.querySelector(".title")
title.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")

for(var i=0; i<pacientes.length; i++){
    peso = pacientes[i].querySelector(".info-peso").textContent
    altura = pacientes[i].querySelector(".info-altura").textContent
    imc = pacientes[i].querySelector(".info-imc")

    calcImc = peso / (altura*altura)
    
    if(peso<=0 || peso>=1000){
        imc.textContent = ("peso inválido!")
        pacientes[i].classList.add("campo-invalido")
    }
    else if(altura<=0 || altura>=3){
        imc.textContent = ("altura inválida!")
        pacientes[i].classList.add("campo-invalido")
    }
    else
        imc.textContent = calcImc.toFixed(2)
}


var buttomAdd = document.querySelector("#adicionar-paciente")

buttomAdd.addEventListener("click", function(event){
    event.preventDefault()
    
    var form = document.querySelector("#form-add")

    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gordurTtd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gordurTtd.textContent = gordura

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gordurTtd)

    var tabelaPacientes = document.querySelector("#tabela-pacientes")
    tabelaPacientes.appendChild(pacienteTr)


})