function tabuada(){

var num = document.getElementById('num')
var tab = document.getElementById('seltab')
var res = document.getElementById('res')

if (num.value.length != 0) {
    var n = Number(num.value)
    var c = 1

    tab.innerHTML = ' '
    while (c <= 10) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++

    }
}else{
    window.alert("Por favor, digite um número!")
}


}