const { Car } = require('./class');

console.log(Car);

var car1 = new Car('red');
console.log(car1.returnColor());
console.log(car1.isDoor);