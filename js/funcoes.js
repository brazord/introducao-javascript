var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = peso / (altura * altura);
    paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
}

var novoPaciente = document.createElement("tr");
novoPaciente.classList.add("paciente");

var tdNome = document.createElement("td");
tdNome.classList.add("info-nome");

var tdPeso = document.createElement("td");
tdPeso.classList.add("info-peso");

var tdAltura = document.createElement("td");
tdAltura.classList.add("info-altura");

var tdGordura = document.createElement("td");
tdGordura.classList.add("info-gordura")

var tdImc = document.createElement("td");
tdImc.classList.add("info-imc")

novoPaciente.appendChild(tdNome);
novoPaciente.appendChild(tdPeso);
novoPaciente.appendChild(tdAltura);
novoPaciente.appendChild(tdGordura);
novoPaciente.appendChild(tdImc);

document.querySelector("#tabela-pacientes").appendChild(novoPaciente);

// document.querySelectorAll(".info-nome").onclick(function(){alert('clicou em um nome')});