var num = document.getElementById('num')
var sel = document.getElementById('sel')
var res = document.getElementById('res')
var valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar() {
   

    if (isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
            item.text = `Valor ${num.value} foi adicionado`
            sel.appendChild(item)
            res.innerHTML= ''
    }else{
        window.alert('[ERRO], número inválido ou já foi adicionado')
    }

    num.value = ''
    num.focus()
    
}

function finalizar(){

    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        var maior = valores[0]
        var menor = valores[0]

        for (let pos  in valores) {
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        var soma = 0
        for(var c = 0; c < valores.length;c++){
            soma += valores[c]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length}.</p>`
    }
   
}


