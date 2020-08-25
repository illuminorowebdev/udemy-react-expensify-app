//
// Object Destructing
//

// const person = {
//   name: "Jessie",
//   age: 21,
//   location: {
//     city: "Naples",
//     temp: 92
//   }
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It is ${temperature} degrees in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holliday",
//   publisher: {
//     // name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

//
// Array Destructing
//

// const address = ["103 Cedar Lane", "Groton", "NY", "13037"];

// const [, city, state = "Florida"] = address;

// console.log(`You are in ${city} ${state}`);

const item = ["Coffee(iced)", "$2.00", "$2.60", "$2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
