'use strict';

function Store(location, customerPerHr, averageCookiePerHr, open) {
  this.location = location;
  this.customerPerHr = customerPerHr;
  this.averageCookiePerHr = averageCookiePerHr;
  this.open = open;
}

Store.allStores = [];

// ALL STORES are open the same hours => repetition implicit
function openHours(open, close) {
  let hours = [];
  hours.push(open);
  while (!hours.includes(close)) {
    open++;
    hours.push(open)
  }
}
console.log(openHours(6,8));

// UNIQUE to each store
// min and max customers per hour.
// average cookies per customer.


// method of object - generate random customers per hour.
Store.prototype.makeRandom = function() {
  this.customerPerHr = Math.floor(Math.random() * (b - a + 1) + a);
  console.log(this)
}

Store.allStores.push(new Store());

