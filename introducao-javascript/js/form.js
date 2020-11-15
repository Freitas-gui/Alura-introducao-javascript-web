var buttomAdd = document.querySelector("#adicionar-paciente")

buttomAdd.addEventListener("click", function(event){
    event.preventDefault()
    
    var form = document.querySelector("#form-add")
    var paciente = obtePacienteDoForm(form)

    var pacienteTr = montaTr(paciente)

    var tabelaPacientes = document.querySelector("#tabela-pacientes")
    tabelaPacientes.appendChild(pacienteTr)

    form.reset()
})

function obtePacienteDoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calculaImc(peso, altura)
    }
    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-name"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}