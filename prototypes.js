// Prototype example
/* Foo has an object property called "prototype"
   The prototype was created automatically when we declared the function Foo. */
Foo.hasOwnProperty('prototype'); // true

// Once created, we can assign properties and methods to it
Foo.prototype.myName = function () {
  return 'My name is ' + this.name;
};
