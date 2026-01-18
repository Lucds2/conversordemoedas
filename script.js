const botao = document.querySelector("button");
const selectValueConvert = document.querySelector(".select-currency-convert");
const currencyActual = document.querySelector(".select-currency-actual");

function clicBotao() {
  const dolar = 5.31;
  const euro = 6.25;
  const libra = 7.16;
  const bit = 599720.00;
  const deuro = 1.17;
  const dlibra = 1.34;
  const dbit = 114000.00;
  const dreal = 0.18;
  const edolar = 1.17
  const elibra = 1.14
  const ebit = 97600.00
  const ereal = 6.25
  const ldolar = 1.34
  const leuro = 1.14
  const lbit = 84871.14
  const lreal = 7.14
  const bdolar = 114115.13
  const beuro = 97600
  const blibra = 83000.15
  const breal = 608000.52
  const selectValueConvert = document.querySelector(".select-currency-convert");
  const currencyConvert = document.querySelector(".input-currency").value;
  const currencyToConvert = document.querySelector(".txt-convert");
  const currencyToConverted = document.querySelector(".txt-converted");
  const currencyActual = document.querySelector(".select-currency-actual");


  if(selectValueConvert.value == currencyActual.value){
        alert("Conversão impossível de moeda para moeda. Altere os parâmetros.")
        currencyToConvert.innerHTML = "Erro"
        currencyToConverted.innerHTML = "Erro"
        return
  }


  if (currencyActual.value == "dolar") {
    if (selectValueConvert.value == "euro") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(currencyConvert / deuro);
      currencyToConvert.innerHTML = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'USD',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "libra") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP",
      }).format(currencyConvert / dlibra);
      currencyToConvert.innerHTML = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'USD',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "bitcoin") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(currencyConvert / dbit);
      currencyToConvert.innerHTML = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'USD',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "real") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(currencyConvert / dreal);
      currencyToConvert.innerHTML = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'USD',
      }).format(currencyConvert)
    }
  }

  if (currencyActual.value == "euro") {
    if (selectValueConvert.value == "dolar") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(currencyConvert / edolar);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'EUR',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "libra") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP",
      }).format(currencyConvert / elibra);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'EUR',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "bitcoin") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(currencyConvert / ebit);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'EUR',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "real") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(currencyConvert / ereal);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'EUR',
      }).format(currencyConvert)
    }
  }

if (currencyActual.value == "libra") {
    if (selectValueConvert.value == "dolar") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(currencyConvert / ldolar);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'GBP',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "euro") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(currencyConvert / leuro);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'GBP',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "bitcoin") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(currencyConvert / lbit);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'GBP',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "real") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(currencyConvert / lreal);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'GBB',
      }).format(currencyConvert)
    }
  }

if (currencyActual.value == "bitcoin") {
    if (selectValueConvert.value == "dolar") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(currencyConvert * bdolar);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'BTC',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "euro") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(currencyConvert * beuro);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'BTC',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "libra") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP",
      }).format(currencyConvert * blibra);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'BTC',
      }).format(currencyConvert)
    }
    if (selectValueConvert.value == "real") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(currencyConvert * breal);
      currencyToConvert.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency:'BTC',
      }).format(currencyConvert)
    }
  }

  if (currencyActual.value == "real") {
    if (selectValueConvert.value == "dolar") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(currencyConvert / dolar);
    }
    if (selectValueConvert.value == "euro") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(currencyConvert / euro);
    }
    if (selectValueConvert.value == "libra") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP",
      }).format(currencyConvert / libra);
    }
    if (selectValueConvert.value == "bitcoin") {
      currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
      }).format(currencyConvert / bit);
    }

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(currencyConvert);
  }
}

function changeFlag() {
  const selectValueConvert = document.querySelector(".select-currency-convert");
  const bandConvert = document.querySelector(".flag-converted");
  const txtConverted = document.getElementById("currency-bandeira-converted");

  if (selectValueConvert.value == "dolar") {
    txtConverted.innerHTML = "Dólar americano";
    bandConvert.src = "./assets/estados-unidos (1) 1.png";
  }

  if (selectValueConvert.value == "euro") {
    txtConverted.innerHTML = "Euro";
    bandConvert.src = "./assets/euro.png";
  }

  if (selectValueConvert.value == "libra") {
    txtConverted.innerHTML = "Libra esterlina";
    bandConvert.src = "./assets/libra 1.png";
  }

  if (selectValueConvert.value == "bitcoin") {
    txtConverted.innerHTML = "Bitcoin";
    bandConvert.src = "assets/bitcoin 1.png";
  }

  if (selectValueConvert.value == "real") {
    txtConverted.innerHTML = "Real";
    bandConvert.src = "assets/brasil 2.png";
  }

  clicBotao();
}

function changeFlagActual(){
  const currencyActual = document.querySelector(".select-currency-actual");
  const txtActual = document.getElementById('currency-bandeira-convert');
  const flagConvert = document.querySelector('.img-currency-convert');
  const txtConvert = document.querySelector('.txt-convert');
  const txtValue = txtConvert.value

  if (currencyActual.value == "real") {
    txtActual.innerHTML = "Real";
    flagConvert.src = "assets/brasil 2.png";
    txtConvert.innerHTML = 'R$ 0.00'
  }

  if (currencyActual.value == "dolar") {
    txtActual.innerHTML = "Dólar Americano";
    flagConvert.src = "assets/estados-unidos (1) 1.png";
    txtConvert.innerHTML = '$ 0.00'
    
  }
  if (currencyActual.value == "euro") {
    txtActual.innerHTML = "Euro";
    flagConvert.src = "assets/euro.png";
    txtConvert.innerHTML = '€ 0.00'
    
  }
   if (currencyActual.value == "libra") {
    txtActual.innerHTML = "Libra";
    flagConvert.src = "assets/libra 1.png";
    txtConvert.innerHTML = '£ 0.00'
    
  }
    if (currencyActual.value == "bitcoin") {
    txtActual.innerHTML = "Bitcoin";
    flagConvert.src = "assets/bitcoin 1.png";
    txtConvert.innerHTML = '₿ 0.00'
    
  }

  clicBotao();
}

currencyActual.addEventListener('change', changeFlagActual);
selectValueConvert.addEventListener("change", changeFlag);
botao.addEventListener("click", clicBotao);
