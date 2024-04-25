function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {    
        let n = Number(num.value)
        let c = 1 //CONTADOR
        tab.innerHTML = ''   //Limpar o seletor 
        while (c <=10){ //Enquanto o contador for menor que 10, faça:
            let item = document.createElement('option') //Criando o elemento opção
            //item.text = `${num} x ${c} = ${num*c}` //Fazendo o cálculo matemático// Neste caso está errado por buscou a variável num que é uma variável do tipo texto
            item.text = `${n} x ${c} = ${n*c}` //Fazendo o cálculo matemático
            item.value = `tab${c}`
            tab.appendChild(item) //Adicionar o elemento filho, ou seja, fazer aparecer o resultado
            c++

        }      
    }
    
}   