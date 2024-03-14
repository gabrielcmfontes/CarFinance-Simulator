//Elementos
const calcButton = document.querySelector("#calcButton");
const backButton = document.getElementById('backButton');
const results = document.getElementById('results');
const container = document.getElementById('container');

const parcelaResposta = document.getElementById("parcela");
const totalPriceResposta = document.getElementById("totalPrice");
const totalFeesResposta = document.getElementById("justFees");
const ipvaResposta = document.getElementById("ipva");

const modeButton = document.getElementById("modeCheckBox");

//Eventos



//Events Listener

modeButton.addEventListener("change", (event) => {
     document.getElementById("main").classList.toggle("darkTheme");
})

backButton.addEventListener("click", (event) => {
    event.preventDefault()
    results.classList.add("none");
    container.classList.remove("none");
})

calcButton.addEventListener("click", (event) => {
    event.preventDefault()

    if(document.getElementById("number").value <= 0){
        alert("O número de parcelas deve ser maior que 0")
    }else if(document.getElementById('price').value <= 0){
        alert("O preço do carro deve ser maior que 0")
    }
    else{
        results.classList.remove("none");
        container.classList.add("none");
    
        const  price = document.getElementById('price').value;
        const  entry = document.getElementById("entry").value;    
        const  fees = document.getElementById("fees").value;
        const  number = document.getElementById("number").value;
    
        
        console.log(price);
    
            let parcela = 0;
            let totalPrice = 0;
            let totalFees = 0;
            let ipva = 0;
    
            // getParcela
            var numerador = ((1 + fees/100) ** number) * (fees/100);
            var denominador = ((1 + fees/100) ** number) - 1;
            parcela = (price - entry) * (numerador/denominador);
    
            //getTotalPrice
            totalPrice = parcela * number;
    
            //getJustFees
            justFees = totalPrice - (price - entry);
    
            //getIPVA
            ipva = price * 0.04;
    
            parcelaResposta.value = parcela.toFixed(2);
            totalPriceResposta.value = totalPrice.toFixed(2);
            totalFeesResposta.value = justFees.toFixed(2);
            ipvaResposta.value = ipva.toFixed(2);
    
    }
});