'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const [first, second, third] = restaurant.categories;

// const nested = [2, 3, [4, 5]];
// const [i, j, [k, l]] = nested;

// const [p, q, r] = [8, 9];

// const { name, categories, mainMenu } = restaurant;
// const {
//   name: restaurantName,
//   categories: restaurantCategories,
//   mainMenu: dishes,
// } = restaurant;

// const { menu = [], starterMenu: starters = [] } = restaurant;

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [1, 2, 3];
// const newArray = [...arr, 4, 5];

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// const str = 'Kevin';
// const letters = [...str, ' ', 'C'];

// const ingredients = [
//   prompt('Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// // SPREAD on RIGHT
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // REST on LEFT
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(b);
// console.log(others);

// // REST with objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// const add = (...numbers) => {
//   console.log(numbers);
// };

// const restNumbers = [10, 11, 12];

// add(2, 3, 4);
// add(4, 8, 30, 91);
// add(...restNumbers);

// restaurant.orderPizza('pepperoni', 'mushrooms', 'onion', 'pineapple');

// console.log(3 || 'Kevin');
// console.log('' || 'Kevin');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // Even though it never was declared or defined
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// restaurant.numGuests2 = 23;
// const guests2 = restaurant.numGuests2 ? restaurant.numGuests2 : 10;
// console.log(guests2);

// console.log(0 && 'Kevin');
// console.log(10 && 'Kevin');
// console.log('Hello' && 10 && null && 'Kevin');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// // Shortcut for if statements
// restaurant.orderPizza && restaurant.orderPizza('cheese', 'pastor');

// // Nullish Coalescing operator
// // If the first value Null or undefined, executes the second value
// // NOT for '' or 0
// restaurant.numGuests = 0;
// restaurant.numGuests2 = null;
// const guestCorrect = restaurant.numGuests ?? 10;
// const guestCorrect2 = restaurant.numGuests2 ?? 10;
// console.log(guestCorrect);
// console.log(guestCorrect2);

const rest1 = {
  name: 'Pizza Pie',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Kevin C',
};

// LOGICAL ASSIGNMENT OPERATORS

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator
// Returns the truthy value, but 0 is still falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
// Returns the truthy value (even 0 or '')
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

// It does not return undefined when it's falsy
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);
