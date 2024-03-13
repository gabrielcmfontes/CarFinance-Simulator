const calcButton = document.querySelector("#calcButton");
const backButton = document.getElementById('backButton');
const results = document.getElementById('results');
const container = document.getElementById('container');

const parcelaResposta = document.getElementById("parcela");
const totalPriceResposta = document.getElementById("totalPrice");
const totalFeesResposta = document.getElementById("justFees");
const ipvaResposta = document.getElementById("ipva");

const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
});

backButton.addEventListener("click", (event) => {
    event.preventDefault()
    results.classList.add("none");
    container.classList.remove("none");
})

calcButton.addEventListener("click", (event) => {
    event.preventDefault()

    results.classList.remove("none");
    container.classList.add("none");

    const  price = document.getElementById('price').value;
    const  entry = document.getElementById("entry").value;    
    const  fees = document.getElementById("fees").value;
    const  number = document.getElementById("number").value;

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

    console.log(parcela);
    console.log(totalPrice);
    console.log(justFees);
    console.log(ipva);

    //APARECER RESPOSTA
    parcelaResposta.value = formatter.format(parcela);
    totalPriceResposta.value = formatter.format(totalPrice);
    totalFeesResposta.value = formatter.format(justFees);
    ipvaResposta.value = formatter.format(ipva);
});