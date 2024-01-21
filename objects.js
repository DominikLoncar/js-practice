var Dodo = {
  firstname: 'Dodo',
  lastname: 'Dada',
  address: {
    street: '111 Main St.',
    city: 'New York',
    state: 'NY',
  },
};

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(Dodo);

greet({ firstname: 'John', lastname: 'Doe' });
