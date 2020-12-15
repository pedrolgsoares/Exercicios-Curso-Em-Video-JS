function conte(){
    var inicio = window.document.getElementById("vi")
    var fim = window.document.getElementById("vf")
    var passo = window.document.getElementById("vp")
    var cont_res = window.document.getElementById("cont")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Deu negado,tá faltando dados !!")
    }else{
       cont_res.innerHTML = "Contando: "
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if(i < f){
           for(var contador = i; contador <= f; contador += p){
                cont_res.innerHTML += `${contador} `
            }

       }else{
            for(var contador = i; contador >= f; contador -= p){
                cont_res.innerHTML += `${contador} `
            }
       }
       

    }
}