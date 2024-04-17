var velocidade =  80
console.log(`A velocidade do seu carro é ${velocidade}km/h`) //Neste caso para puxar o placeholder"${velocidade}" foi usado a crase
if (velocidade > 60 ) { //CONDIÇÃO SIMPLES
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}
console.log(`Dirija sempre usando o cinto de segurança e respeite o limite de velocidade de ${velocidade}Km/h.`)


console.log('A velocidade do seu carro é ${velocidade}km/h') //Neste caso como não tem a crase ele não puxou o placeholder "${velocidade}" - ASPAS SIMPLES
console.log("A velocidade do seu carro é ${velocidade}km/h") //Neste caso como não tem a crase ele não puxou o placeholder "${velocidade}" - ASPAS DUPLAS 