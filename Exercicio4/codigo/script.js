function multiplica(){
    var numero = window.document.getElementById("num")
    var tab = window.document.getElementById("tabu")
    if(numero.value.length == 0){
        window.alert("Por favor informe o número")
    }else{
        var numConvertido = Number(numero.value)
        contador = 1
        tabu.innerHTML = ""
        while(contador <= 10){
            var multiplicador = window.document.createElement("option")
            multiplicador.text = `${numConvertido} x ${contador} = ${numConvertido*contador}`
            tab.appendChild(multiplicador)
            contador += 1
        }
        
       /*
        for(var contador = 1; contador <= 10; contador += 1){

        }
        */
    }
}