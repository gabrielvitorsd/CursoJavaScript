let valores = [8, 1, 7, 4, 2, 9] //Vetor com 6 elementos e 6 posições denominado 'valores'.

/*Maneira burra de imprimir os elementos na tela.
console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

//Para imprirmos de maneira inteligente os vetores.

for (let pos = 0; pos < valores.length; pos++) { //Podemos criar uma variável diretamente no 'for'.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


