let array = [
  { age: 15, name: "Aman" },
  { age: 25, name: "Bala" },
  { age: 13, name: "Captain" },
  { age: 44, name: "Druva" },
  { age: 20, name: "Elsa" },
  { age: 60, name: "faijahn" },
];

/* array.sort((a, b) => a.age - b.age);
console.log("Ascending Order:", array);*/

//  descending Order ------------
let b = array.sort((a, b) => b.age - a.age);
console.log("descending Order:", b);
