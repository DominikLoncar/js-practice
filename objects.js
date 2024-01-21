var person = {
  firstname: 'Dodo',
  lastname: 'Dada',
  address: {
    street: '111 Main St.',
    city: 'New York',
    state: 'NY',
  },
};

function greet(person) {
  console.log('Hi' + person.firstname);
}

console.log(person);
