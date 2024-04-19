//Condição composta (aninhada) if/else if
var idadevoto = 25
if (idadevoto < 16){
    console.log('Não vota')
}else if (idadevoto < 18){
    console.log('Voto opcional')
}else if (idadevoto >= 18){
    console.log('Voto obrigatório')
}