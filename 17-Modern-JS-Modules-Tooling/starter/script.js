// import { addToCart, price, add } from './shopping_cart.js';
// console.log('importing module');
// console.log(price);
// add('bread', 10);
// add('butter', 10);
// console.log(addToCart);
// import adds from './shopping_cart.js';
// adds('ice', 20);

import * as sc from './shopping_cart.js';
console.log(sc);
import cloneDeep from 'lodash-es';

const publicApis = function () {
  let cart = [];
  let totalPrice = 100;
  let shiipingCost = 100;
  let addToCart = (item, quantity) => {
    cart.push({ item, quantity });
    console.log(`${item}:${quantity}`);
  };
  let orderQuantity = (item, quantity) => {
    console(`${item} ordered in ${quantity} quantity`);
  };
  return {
    cart,
    totalPrice,
    addToCart,
    orderQuantity,
  };
};
console.log(publicApis.totalPrice);

let obj = {
  cart: [
    { item: 'bread', quantity: 10 },
    { item: 'butter', quantity: 10 },
  ],
  isAvailable: false,
};
let newObj = Object.assign(obj, {});
let newCloneDeepObj = cloneDeep(obj);
obj.isAvailable = true;
console.log(newObj);
console.log(newCloneDeepObj);
if (module.hot) {
  module.hot.accept();
}
