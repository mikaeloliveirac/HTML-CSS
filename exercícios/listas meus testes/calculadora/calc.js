function Calcular(){
    let num1 = document.querySelector("input#txtn1")
    let num2 = document.querySelector("input#txtn2")
    let res = document.querySelector("div#res")
    if(num1.value==0 || num2.value==0){
        window.alert("[ERRO]")
    }
    else{
        let n1=Number(num1.value)
        let n2=Number(num2.value)

        let soma = n1 +n2
        let Dv = n1/n2
        let sub = n1-n2
        let mult = n1*n2
        res.innerHTML= `A soma entre os números é ${soma}`
    }
    
}


  


