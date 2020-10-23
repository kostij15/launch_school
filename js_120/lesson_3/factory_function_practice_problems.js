//2.
function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

//3.


// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

// properties should be internet, phone and total method

// function createInvoice(services = {}) {

//   let phonePay = services.hasOwnProperty('phone') ? services.phone : 3000;
//   let internetPay = services.hasOwnProperty('internet') ? services.internet : 5500;

//   return {
//     phone: phonePay,
//     internet: internetPay,

//     total() {
//       return this.phone + this.internet;
//     }
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

//4 Build createPayment
// internet, phone, total
// if amount is present then amount else total

function createPayment(services = {}) {
  return {
    phone: services.hasOwnProperty('phone') ? services.phone : 0,
    internet: services.hasOwnProperty('internet') ? services.internet : 0,

    total() {
      return services.hasOwnProperty('amount') ? services.amount : this.phone + this.internet;
    }
  }
}

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment) => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000

//5. Update createInvoice so that it can add payment(s) to invoices

function createInvoice(services = {}) {

  let phonePay = services.hasOwnProperty('phone') ? services.phone : 3000;
  let internetPay = services.hasOwnProperty('internet') ? services.internet : 5500;

  return {
    phone: phonePay,
    internet: internetPay,
    payments: [],

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(payments) {
      this.payments.push(...payments);
    },

    paymentTotal() {
      return this.payments.reduce((total, payment) => total + payment.total(), 0);
    },

    total() {
      return this.phone + this.internet;
    },

    amountDue() {
      return this.total() - this.paymentTotal();
    }
  };
}

invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0