//Condição composta (aninhada) if/else if
var idadevoto = 15
console.log(`Você tem ${idadevoto} anos, logo:`)
if (idadevoto < 16){
    console.log('Não vota')
}else if (idadevoto < 18 || idadevoto > 65){
    console.log('Voto opcional')
}else {
    console.log('Voto obrigatório')
}