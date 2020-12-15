function load(){
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são -> ${hora}:${min}`
    
    if(hora >= 0 && hora < 12){
        img.src = './img/manhã.png'
        window.document.body.style.background = '#ffdf68'
        // BOM DIA !
    } else if(hora >=12 && hora < 18){
        img.src = './img/tarde.png'
        window.document.body.style.background = '#f0a689'
        // BOA TARDE !
    } else {
        img.src = './img/noite.png'
        window.document.body.style.background = '#1c3c49'
        // BOA NOITE !
    }
}