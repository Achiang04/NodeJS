// const counter = function (arr) {
//   return `there are ${arr.length} element in this array`;
// };

// const adder = function (a, b) {
//   return `the sum of the numbers is ${a + b}`;
// };

// const pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// module.exports = {
//   counter: counter,
//   adder: adder,
//   pi: pi,
// };

// module.exports = {
//   counter,
//   adder,
//   pi,
// };

// simple way
module.exports.counter = function (arr) {
  return `there are ${arr.length} element in this array`;
};

module.exports.adder = function (a, b) {
  return `the sum of the numbers is ${a + b}`;
};

module.exports.pi = 3.142;
