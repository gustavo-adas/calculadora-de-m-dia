var nome = "Gustavo"

var notaDoPrimeiroBimestre = 9.455
var notaDoSegundoBimestre = 7.851
var notaDoTerceiroBimestre = 4.895
var notaDoQuartoBimestre = 2.358

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)
  
console.log("Bem vindo " + nome);
console.log("Sua nota final: " + notaFixada);