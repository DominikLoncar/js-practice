const a = 23;
console.log(Object.getPrototypeOf(a));

function plusTwo(num) {
  return num + 2;
}

console.log(plusTwo(2));

function greet(whatToSay) {
  return function (name) {
    console.log(whatToSay + ' ' + name);
  };
}

var sayHi = greet('Hi');
sayHi('Dom');

const greetMe = (name) => `Hi ${name}!`;
console.log(greetMe('Dom'));
