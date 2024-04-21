function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados inseridos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){ //CRIANÇA
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) { //JOVEM
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) { //ADULTO
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else { //IDOSO
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){ //CRIANÇA
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21) { //JOVEM
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) { //ADULTO
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else { //IDOSO
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}