// Tasas de conversión
const oneEuroIs = {
    "JPY": 156.5, //  JP yen
    "USD": 1.07,  //  US dollar
    "GBP": 0.87   // GB pound
};



// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Primero convertimos dólares a euros, luego euros a yenes
    const valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
}


const fromYenToPound = function(valueInYen) {
    // Primero convertimos yenes a euros, luego euros a libras
    const valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
}


const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { 
    sum, 
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
};