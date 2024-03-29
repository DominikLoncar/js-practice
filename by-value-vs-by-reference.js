// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))
var c = { greet: 'hi' };
var d;

d = c;
c.eat = 'eating';

console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
  obj.greet = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greet: 'howdy' };
console.log(c);
console.log(d);
