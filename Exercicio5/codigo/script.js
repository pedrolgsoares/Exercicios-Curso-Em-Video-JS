var numPraAdd = window.document.getElementById("num")
var listaNum = window.document.getElementById("listaNum")
var resultado = window.document.getElementById("resultado")
var todosNum = []

function numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function lista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adiciona(){
    if(numero(numPraAdd.value) && !lista(numPraAdd.value,todosNum)){
        todosNum.push(Number(numPraAdd.value))
        var chave = document.createElement("option")
        chave.text = `Foi adicionado na lista o valor: ${numPraAdd.value}`
        listaNum.appendChild(chave)
        resultado.innerHTML = ''
    }else {
        window.alert("Valor inválido ou já adicionado na lista,por favor informe outro valor !!!")
    }
    numPraAdd.value = ''
    numPraAdd.focus()
}

function finaliza(){
    if(todosNum.length == 0){
        window.alert("Por favor adicione os valores,antes de finalizar !!")
    } else{
        var totalNum = todosNum.length
        var maiorNum = todosNum[0]
        var menorNum = todosNum[0]
        var somaNum = 0
        var mediaNum = 0
        for(var posicao in todosNum){
            if(todosNum[posicao] > maiorNum){
                maiorNum = todosNum[posicao]
            }else if(todosNum[posicao] < menorNum){
                menorNum = todosNum[posicao]
            }
            somaNum += todosNum[posicao]
        }
        mediaNum = somaNum / totalNum
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>O a quantidade total dos elementos é de: ${totalNum}</p>`
        resultado.innerHTML += `<p>O ${maiorNum} é o maior número!</p>`
        resultado.innerHTML += `<p>O ${menorNum} é o menor número!</p>`
        resultado.innerHTML += `<p>A soma total dos valores foi de: ${somaNum}`
        resultado.innerHTML += `<p>A média total dos valores é de: ${mediaNum}`
    }
}
