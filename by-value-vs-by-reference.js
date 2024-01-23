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

c.eat = 'eating';
d = c;

console.log(d);
