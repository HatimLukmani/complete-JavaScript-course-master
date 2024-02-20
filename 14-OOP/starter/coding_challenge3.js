// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

//task-1
const Cars = function (speed, make) {
  this.speed = speed;
  this.make = make;
  Cars.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
  };
  Cars.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
  };
};

const EV = function (speed, make, charge) {
  Cars.call(this, speed, make);
  this.charge = charge;
};
EV.prototype = Object.create(Cars.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge = Number.parseInt(this.charge) - 1 + '%';

  console.log(
    `${this.make} is going at ${this.speed} with battery of ${this.charge}`
  );
};
EV.prototype.constructor = EV;
const tesla = new EV(120, 'tesla', '50%');
tesla.accelerate();
