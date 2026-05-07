// TODO validate input (km > 0, age > 0), check empty prompt, check if input is a number?

console.log('Calcolo del prezzo biglietto treno');

// Ask the user for the number of kilometers and their age
const km = Number(prompt('Quanti km vuoi percorrere?'));
const age = Number(prompt('Quanti anni hai?'));

// Define constants for the price per kilometer and discounts
const PRICE_PER_KM = 0.21;
const DISCOUNT_UNDER_18 = 0.2;
const DISCOUNT_OVER_65 = 0.4;

// Calculate the discount based on age
let discount = 0;
if (age < 18) discount = DISCOUNT_UNDER_18;
else if (age >= 65) discount = DISCOUNT_OVER_65;

// Calculate the final price and format it to two decimal places
const basePrice = km * PRICE_PER_KM;
const price = basePrice * (1 - discount);
const formattedPrice = price.toFixed(2);

// Output the final price
console.log(`Il prezzo del biglietto e' €${formattedPrice}`);

// -------------------
// Test cases:
// 100km, 10 years => €16.80 (under 18, 20% discount)
// 100km, 30 years => €21.00 (no discount)
// 100km, 70 years => €12.60 (over 65, 40% discount)
