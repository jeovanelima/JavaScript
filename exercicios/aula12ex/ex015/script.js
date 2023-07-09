function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    

    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document. createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero= 'Homem'

            if(idade >=0 && idade <=3){
                //bebe
                img.setAttribute('src', 'imagens/bebe.jpg')
            }else if(idade >3 && idade <12) {
                //crianca
                img.setAttribute('src', 'imagens/crianca-m.jpg')
            } else if(idade <20){
                //jovem
                img.setAttribute('src', 'imagens/joven-m.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }

        } else if(fsex[1].checked){
            genero= 'Mulher'

            if(idade >=0 && idade <=3){
                //bebe
                img.setAttribute('src', 'imagens/bebe.jpg')
            }else if(idade >3 && idade <12) {
                //crianca
                img.setAttribute('src', 'imagens/crianca-f.jpg')
            } else if(idade <20){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }

        }

        res.style.textAlign='center'
        res.innerHTML=`<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}