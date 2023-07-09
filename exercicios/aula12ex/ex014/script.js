function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML=`Agora são ${hora} Horas`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src ='imagens/manha.jpg'
        document.body.style.background='#62829e'
    } else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src ='imagens/tarde.jpg'
        document.body.style.background='#fcb99e'
    }else{
        //boa noite
        img.src ='imagens/noite.jpg'
        document.body.style.background='#9576af'
    }

}



