const num23 = 23;
console.log(Object.getPrototypeOf(num23));

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

let firstTenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

firstTenArray.map((num) => console.log(num));

let obj = {
  name: 'Pepec',
  age: '79421',
};

console.log(obj);

// Execution context practice.

function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

// Execution context practice #2.

function b2() {
  console.log(myVar2);
}

function a2() {
  var myVar2 = 2;
  b2();
}

var myVar2 = 1;
a2();

// Execution context practice #3.

function a3() {
  function b3() {
    console.log(myVar3);
  }

  var myVar3 = 2;
  b3();
}

var myVar3 = 1;
a3();
