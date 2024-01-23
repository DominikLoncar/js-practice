function a() {
  console.log(this);
  this.newVariable = 'hello';
}

var b = function () {
  console.log(this);
};

a();

console.log(newVariable);

b();
