function verificar() {
    var nota = document.querySelector('input#txtn')
    var res = document.querySelector('div#res')
    if (nota.value == 0) {
        window.alert('Valor inválido')
    }
    else{
        var n = Number(nota.value)
        if(n>=100){
            console.log('Aprovado')
        }
        if(n<100){
            console.log('Reprovado')
        }
        if(n<60){
            console.log('Com Vergonha')
        }
       res.innerHTML+=`Sua Nota é ${n}`
    }
    
    
}