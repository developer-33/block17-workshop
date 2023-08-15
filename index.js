const  coffeeMenu  = require("./coffee_data_starter");

//Question 2.
//Step 1. Print an array of all drinks on the menu.
console.log('ALL THE DRINKS')
coffeeMenu.map((list, index) => console.log(list, index));
// let drinkNames = coffeeMenu.map((element) => console.log(element.name));
// console.log(drinkNames)


//Question 3.
//Step 1. Create a function that filters out any drink that cost more than $5.
////Step 2. Print a new array with the found data.

const drinksUnderFive = coffeeMenu.filter((drink) => 
drink.price <= 5);
    if(drinksUnderFive.price != 6){
console.log('DRINKS THAT ARE 5 BUCKS OR LESS')
    }else{
        console.log('error')
    }

console.log(drinksUnderFive);

//Question 4.
// Step 1. Create a function that stores any drinks that cost an even number to a new array.

const drinksEven = coffeeMenu.filter((drink) => 
    drink.price % 2 === 0);
    if(drinksEven.price % 2 !== 0){
console.log('DRINKS THAT ARE EVEN')
    }else{
        console.log('error')
    }

console.log(drinksEven);

//Question 5.
//Step 1. Create a function that takes the price of each drink.
////Step 2. Add the prices together.
/////Step 3. Print a new array.

const drinksTotal = coffeeMenu.reduce((p, c) => {
  return p + c.price
}, 0);

if(drinksTotal === 64){
console.log("ALL THE DRINKS ADDED TOGETHER")
}

console.log(drinksTotal);

// Question 6.
//Step 1. Create a function that prints any drinks "if" drinks are seasonal.

const drinksSeasonal = coffeeMenu.filter((drink) => {
  if (drink.seasonal === true) {
    return drink.seasonal;
  }
});

if(drinksSeasonal !== true){
console.log('SEASONAL DRINKS')
}

console.log(drinksSeasonal);

// Question 6.
//Step 1. Create a function that filters out only seasonal drinks.
////Step 2. If the drink is seasonal, add 'With imported beans' after then name

let importedBeans = coffeeMenu.map((drink) => {
  if (drink.seasonal === true && drink.name !== null) {
    return `${drink.name} with imported beens`;
  }
});

console.log(importedBeans);