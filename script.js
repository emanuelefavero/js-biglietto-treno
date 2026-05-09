// Constants
const PRICE_PER_KM = 0.21;
const MINOR_DISCOUNT = 0.2;
const SENIOR_DISCOUNT = 0.4;
const MINOR_AGE = 18;
const SENIOR_AGE = 65;

// DOM elements
const output = document.getElementById('output');

console.log('Calcolo del prezzo biglietto treno');

// User input
const km = Number(prompt('Quanti km vuoi percorrere?'));
const age = Number(prompt('Quanti anni hai?'));

// Validation
const isValidInput = !isNaN(km) && !isNaN(age) && km > 0 && age > 0;

if (isValidInput) {
  // Calculate discount
  let discount = 0;
  if (age < MINOR_AGE) discount = MINOR_DISCOUNT;
  else if (age >= SENIOR_AGE) discount = SENIOR_DISCOUNT;

  // Price calculation
  const basePrice = km * PRICE_PER_KM;
  const price = basePrice * (1 - discount);

  // Format price
  const formattedPrice = price.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'EUR',
  });

  // Success Output
  const resultMessage = `Il prezzo del biglietto è ${formattedPrice}`;
  console.log(resultMessage);
  output.textContent = resultMessage;
} else {
  // Error Output
  const errorMessage =
    "Per favore, inserisci un numero valido per i km e l'età.";
  console.log(errorMessage);
  output.textContent = errorMessage;
}

// -------------------
// Test cases:
// 100km, 10 years => €16.80 (under 18, 20% discount)
// 100km, 30 years => €21.00 (no discount)
// 100km, 70 years => €12.60 (over 65, 40% discount)
