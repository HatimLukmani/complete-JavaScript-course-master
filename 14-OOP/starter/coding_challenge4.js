//////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
// const Cars = function (speed, make) {
//     this.speed = speed;
//     this.make = make;
//     Cars.prototype.accelerate = function () {
//       this.speed += 10;
//       console.log(this.speed);
//     };
//     Cars.prototype.brake = function () {
//       this.speed -= 5;
//       console.log(this.speed);
//     };
//   };

class cars {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}

//   const EV = function (speed, make, charge) {
//     Cars.call(this, speed, make);
//     this.charge = charge;
//   };
//   EV.prototype = Object.create(Cars.prototype);
//   EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
//   };
//   EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge = Number.parseInt(this.charge) - 1 + '%';

//     console.log(
//       `${this.make} is going at ${this.speed} with battery of ${this.charge}`
//     );
//   };
//   EV.prototype.constructor = EV;
//   const tesla = new EV(120, 'tesla', '50%');
//   tesla.accelerate();

class EV extends cars {
  #charge = 0;
  constructor(speed, make, charge) {
    super(speed, make);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge = Number.parseInt(this.#charge) - 1 + '%';
    console.log(
      `${this.make} is going at ${this.speed} with battery of ${this.#charge}`
    );
    return this;
  }
}
