const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const currencyValueConverted = document.querySelector(".currency-value")
   
    console.log(currencySelect.value)

    const dolarToday = 5.2

    const euroToday = 6.2

    const libraToday = 7.0

    const bitcointToday = 527537.4

    const convertedValue = inputCurrencyValue / dolarToday

    if(currencySelect.value == "dolar"){currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { 
        style: "currency",
        currency: 'USD'
        }).format( convertedValue)

    }

    if(currencySelect.value == "euro"){currencyValueConverted.innerHTML =new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR" })
         .format(inputCurrencyValue / euroToday)

    }

    if(currencySelect.value == "libra"){currencyValueConverted.innerHTML= new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'})
        .format(inputCurrencyValue / libraToday)
    }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    console.log(convertedValue)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")

    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src= "./assets/usa.png"

    }
     if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src= "./assets/euro.png"
}

    if(currencySelect.value == "libra"){
        currencyName.innerHTML= "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    convertValues()
}


currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)