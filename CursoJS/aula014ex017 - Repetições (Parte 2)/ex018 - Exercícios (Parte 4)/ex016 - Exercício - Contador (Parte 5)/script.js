function contar(){ //Criando variáveis para armazenar os dados inseridos nos 'inputs'
    var inicio = document.getElementById('txti')
    var fim  = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    //Verificar se os dados estão faltando
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //length significa comprimento, ou seja, quantas letras tem na variável escrita pelo usuário no input com id = inicio. // se o comprimento da variável inicio tiver valor vazio, então faça: 
        window.alert( '[ERROR] Faltam dados!' )
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = '<strong>Contando: </strong> <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Consider PASSO 1')
            p = 1
        }
        if (i < f) { //Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F911}`
            }

        } else { //Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F911}`            
        
            }
        }
        res.innerHTML += `\u{1F3C1}`
    
    }




}   
