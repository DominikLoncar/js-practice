var a;

if (a === 3) {
}

function greet() {
  console.log('hi');
}

var anonymousGreet = function () {
  console.log('hi');
};

anonymousGreet();

function log(a) {
  console.log(a);
}

log({ greeting: 'hi' });

log(function () {
  console.log('hi');
});
