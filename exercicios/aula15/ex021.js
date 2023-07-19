var valores = [8, 1, 7, 4, 2, 9]

valores.sort()

/*for (let c = 0; c < valores.length; c++) {
    console.log(`posição ${c} = ${valores[c]}`)
 }*/

 for (let pos in valores) {
    console.log(valores[pos])
 }
