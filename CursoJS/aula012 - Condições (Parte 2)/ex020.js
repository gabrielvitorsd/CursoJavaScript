var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 6 && hora < 12){
    console.log('Manhã!')
}else if(hora > 12 && hora < 18){
    console.log('Tarde!')
}else if(hora > 18 && hora < 24){
    console.log('Noite!')
}else if(hora >= 0 && hora < 6){
    console.log('Madrugada!')
}else {
    console.log('Sua hora é invalida!')
}