var temperatura = 38
var tipoTemperatura = "C"
var temperaturaConvertida = 0

if (tipoTemperatura == "C"){
    console.log("Voce escolheu Celcius!!!")
    temperaturaConvertida = ((temperatura * 1.8) + 32)
}else{
    console.log("Voce escolheu Fahrenheit!!!")
    temperaturaConvertida = ((temperatura - 32) * (5 / 9))
}


console.log("O valor convertido é:" + temperaturaConvertida)