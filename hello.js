const sayHello = function (name) {
  console.log('Hello, ' + name);
}

sayHello('Johnny');


const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('Johnny');
console.log(greeting);

