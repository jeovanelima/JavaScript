function contar() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
        res.innerHTML= 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando: <br>'

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p=1
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
            
        }else{
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            } 
        }
        res.innerHTML+= `\u{1F3C1}`
    }

    
}