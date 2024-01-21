var objectLitaral = {
  firstName: 'John',
  isAProgrammer: true,
};

console.log(JSON.stringify(objectLitaral));

console.log(JSON.parse('{ "firstName": "John", "isAProgrammer": true }'));
