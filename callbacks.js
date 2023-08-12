// function fun1() {
//   console.log("Funtion1");
// }

// function fun2(cb) {
//   console.log("Function2");
//   cb();
// }

// function cb() {
//   console.log("Callback function");
// }

// function fun3() {
//   console.log("Function3");
// }

// fun1();
// fun2(cb);
// fun3();

// callback hell
const cart = ["shoes", "wallet", "shirt"];

api.createOrder(() => {
  api.proceedToPayment(() => {
    api.showOrderSummary(() => {});
  });
});
