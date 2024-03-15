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

    if(document.getElementById("number").value <= 1){
        alert("O número de parcelas deve ser maior que 1")
    }else if(document.getElementById('price').value <= 0){
        alert("O preço do carro deve ser maior que 0")
    }
    else{
        results.classList.remove("none");
        container.classList.add("none");


    
        let  price = parseFloat(document.getElementById('price').value);
        let  entry = parseFloat(document.getElementById("entry").value); 
        let  fees = parseFloat(document.getElementById("fees").value);
        let  number = parseFloat(document.getElementById("number").value);

            let parcela = 0;
            let totalPrice = 0;
            let ipva = 0;
    
            // getParcela
            var numerador = ((1 + fees/100) ** number) * (fees/100);
            var denominador = ((1 + fees/100) ** number) - 1;
            parcela = (price - entry) * (numerador/denominador);
    
            //getTotalPrice
            totalPrice = (parcela * number) + entry;
    
            //getJustFees
            justFees = totalPrice - (price);
    
            //getIPVA
            ipva = price * 0.04;
    
            parcelaResposta.value = parcela.toFixed(2);
            totalPriceResposta.value = totalPrice.toFixed(2);
            totalFeesResposta.value = justFees.toFixed(2);
            ipvaResposta.value = ipva.toFixed(2);
    
    }
});