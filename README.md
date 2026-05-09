# JS Biglietto Treno

JavaScript exercise from my web development course.

The assignment asks for a program that calculates the price of a train ticket based on the number of kilometers to travel and the passenger's age.

> Note: See [Technical Notes](#technical-notes) for details on the implementation.

## Solution

- Open `index.html` in a browser to see the program in action
- Explore the code in `script.js` to see the solution implementation

## Goal

The program asks the user for:

- the number of kilometers to travel;
- the passenger's age.

It then calculates the final ticket price using these rules:

- base price: `0.21 €` per km;
- `20%` discount for minors;
- `40%` discount for passengers aged 65 or older;
- final output formatted with two decimal digits.

## Test Cases

| Km  | Age | Expected price |
| --- | --- | -------------- |
| 100 | 10  | `€16.80`       |
| 100 | 30  | `€21.00`       |
| 100 | 70  | `€12.60`       |

## Technical Notes

- Main calculation values are stored as constants: price per km, discount percentages, and age thresholds.
- Values returned by `prompt` are converted with `Number`.
- Before calculating the price, the input is validated.
- The discount is handled with a `discount` variable, initialized to `0` and updated only when the passenger belongs to a discounted category.
- The calculation is split into `basePrice`, `price`, and `formattedPrice` to keep each step readable.
- `toLocaleString('it-IT')` is used to format the final price as an Italian Euro currency value.
- The result is displayed directly in the page through the `#output` element.
