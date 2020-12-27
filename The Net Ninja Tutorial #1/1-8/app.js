// console.log("yoo");

// setTimeout(function () {
//   console.log("3 secconds have passed");
// }, 3000);

// let time = 0;

// const timer = setInterval(function () {
//   time += 2;
//   console.log(time + " secconds have passed");
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// console.log(__dirname); // kasih tau lokasi folder sekarang
// console.log(__filename); // kasih tau lokasi file sekarang

// normal function statement
// function sayHi() {
//   console.log("Hi");
// }
// sayHi();

// function callFunction(fun) {
//   fun();
// }

// function expression
// const sayBye = function () {
//   console.log("Bye");
// };

// callFunction(sayBye);

// const counter = require("./count");
// console.log(counter(["ucup", "asep", "bambang"]));

// const stuff = require("./stuff");
// console.log(stuff.counter(["ucup", "asep", "bambang"]));
// console.log(stuff.adder(1, 2));
// console.log(stuff.adder(stuff.pi, 5));

const events = require("events");
// const myEmitter = new events.EventEmitter();
// myEmitter.on("someEvent", function (msg) {
//   console.log(msg);
// });
// myEmitter.emit("someEvent", "the event was emitted");

const util = require("util");

const Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

const ucup = new Person("ucup");
const asep = new Person("asep");
const bambang = new Person("bambang");

const people = [ucup, asep, bambang];

people.forEach(function (person) {
  person.on("speak", function (msg) {
    console.log(`${person.name} said: ${msg}`);
  });
});

ucup.emit("speak", "hey dudes");
asep.emit("speak", "woi anak haram");
