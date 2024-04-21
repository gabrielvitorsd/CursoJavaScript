function carregar(){
    var msg = window.document.getElementById('msg') //Criando um objeto para o id = "msg"
    var img = window.document.getElementById('imagem') //Criando um objeto parao id = "foto"
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){ //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffc851'
    }else if (hora >= 12 && hora <= 18){ //BOA TARDE
        img.src = 'fototarde.png' 
        document.body.style.background = '#c2c5d4'        
    }else { // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#031732'
    }
}
