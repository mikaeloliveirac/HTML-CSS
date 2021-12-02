function gerar() {
    var hora = document.querySelector('input#txth')
    var res= document.querySelector('div#res')
    var roupa =['camisa','chapéu','casaco'];
    if(hora.value==0){
        window.alert('[INVÁLIDO] Digite um valor')
    }
    else{
        var h = Number(hora.value)
        if(h>6 && h<12){
            console.log(roupa[0])
        }
        if(h>12 && h<18){
            console.log(roupa[1])
        }
        else{
            console.log(roupa[2])
        }
    }res.innerHTML=`Você saírá às ${h}. Use ${roupa[0]}`
}