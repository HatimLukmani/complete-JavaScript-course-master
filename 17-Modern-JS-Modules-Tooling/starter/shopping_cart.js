console.log('exporting module');
const price = 30;
const addToCart = [];

const add = function (item, quantity) {
  addToCart.push({ item, quantity });
  console.log(`${item} added in ${quantity}`);
};
export { price, addToCart, add };

export default function (item, quantity) {
  addToCart.push({ item, quantity });
  console.log(`${item} added in ${quantity}`);
}
