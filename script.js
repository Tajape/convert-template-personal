//cotação de moedas do dia
const USD = 4.87;
const EUR = 5.35;
const GBP = 6.80;

// obtendo os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector ("main footer")
const description = document.getElementById("description")
const result = document.querySelector("#result")

//manipulando o input amount para receber somente os numeros
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharacterRegex, "");
})

//capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

//função pra converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        //exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${fomartCurrencyBRL(price)}`

        //calcula o total
        let total = amount * price;
        
        //se alguem por algum motivo der um jeito de colocar um valor que nao seja um numero...
        if (isNaN(total)) {
            return alert("por favor digite um valor corretamente para converter")
        }

        //fomatar o valor do total
        total = fomartCurrencyBRL(total).replace("R$", "")

        //exibe o resultado total
        result.textContent = `${total} Reais`

        //aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")

    } catch (error) {
        // remove a classe do footer removendo ele da tela
        footer.classList.remove("show-result")
        
        console.log(error)
        alert("Ish... Deu ruim! Não foi possivel converter. Tente novamente mais tarde.")
    }
}

//fomarta a moeda pra real brasileiro
function fomartCurrencyBRL(value){
    //converte pra numero, pra poder usar o toLocaleString
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })
}
