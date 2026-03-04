const amount = document.getElementById("amount");

//manipulando o input amount para receber somente os numeros
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})