function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    
    var formAno = window.document.getElementById("txtAno")
    var res = window.document.getElementById("res")

    if(formAno.value.length == 0 || formAno.value > ano){
        window.alert("Dados inválidos verifique seu ano e tente novamente!!")
    } else{
        //Etapa do ano e idade
        var idade = ano - Number(formAno.value)
        // Etapa de verificação do sexo
        var formSex = window.document.getElementsByName("radSex")
        gênero = ""
        if(formSex[0].checked){
            gênero = "Homem"
            // Etapa de faixa etária
            if(idade >=0 & idade < 10){
                //Criança
                window.document.getElementById("e").innerHTML = "Deve aparecer imagem de uma Criança"
            }
            else if(idade < 21){
                // Jovem
                window.document.getElementById("e").innerHTML = "Deve aparecer imagem de um Jovem"
            } else if(idade < 50) {
                // Adulto
                window.document.getElementById("e").innerHTML = "Deve aparecer imagem de um Adulto"
            } else{
                // Idoso
                window.document.getElementById("e").innerHTML = "Deve aparecer imagem de um Idoso"
            }
            
        }else if (formSex[1].checked){
            gênero = "Mulher"
            // Etapa de faixa etária
            if(idade >=0 & idade < 10){
                //Criança
                window.document.getElementById("e").innerHTML = "Deve aparecer imagem de uma Criança"
            }
            else if(idade < 21){
                // Jovem
                window.document.getElementById("e").innerHTML = "Deve aparecer imagem de um Jovem"
            } else if(idade < 50) {
                // Adulto
                window.document.getElementById("e").innerHTML = "Deve aparecer imagem de um Adulto"
            } else{
                // Idoso
                window.document.getElementById("e").innerHTML = "Deve aparecer imagem de um Idoso"
            }
        }
        res.innerHTML = `A idade é de: ${idade} anos`
    }
}    