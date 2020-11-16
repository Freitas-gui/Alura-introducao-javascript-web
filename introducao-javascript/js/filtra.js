var campoFiltro = document.querySelector("#filtro-tabela")

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente")
    var nomePesquisado = this.value
    if (nomePesquisado.length > 0){
       
        pacientes.forEach(function(paciente){

            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent
            var expressao = new RegExp(nomePesquisado, "i")
            if( !expressao.test(nome) ){
                paciente.classList.add("invisivel")
            }
            else{
                paciente.classList.remove("invisivel")
            }
        })
    }
    else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel")
        })
    }
    
    
})