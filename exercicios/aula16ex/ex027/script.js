var num = document.getElementById('num')
var sel = document.getElementById('sel')
var res = document.getElementById('res')
var valores = []

function adicionar() {

    if (num.value.length == 0 || num.value < 1 || num.value > 100 ) {
        window.alert('ERRO, número inválido ou já foi adicionado')
    }else{
        var n = Number(num.value)
        var item = document.createElement('option')
            item.text = `numero ${n} foi adicionado`
            sel.appendChild(item)
           
    }

    vet.push(n)
    c++
}


