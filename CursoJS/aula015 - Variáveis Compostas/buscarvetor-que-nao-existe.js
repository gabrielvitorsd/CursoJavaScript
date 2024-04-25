let num = [5, 8, 2, 9, 3]

//Se quiser buscar um valor que não existe.
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}

