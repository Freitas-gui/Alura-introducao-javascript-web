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
    var gordurTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gordurTd.textContent = gordura
    imcTd.textContent = calculaImc(peso, altura)

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gordurTd)
    pacienteTr.appendChild(imcTd)

    var tabelaPacientes = document.querySelector("#tabela-pacientes")
    tabelaPacientes.appendChild(pacienteTr)


})