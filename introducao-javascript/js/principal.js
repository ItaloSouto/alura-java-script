var titulo = document.querySelector(".titulo");//buscando pelo propriedade do css
titulo.textContent = 'Pinguas Bacana';

var paciente = document.querySelector("#primeiro-cliente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
console.log(paciente);
console.log(peso);
console.log(altura);

var imc = paciente.querySelector(".info-imc").textContent;
imc = peso / (altura * altura);
console.log(imc);
