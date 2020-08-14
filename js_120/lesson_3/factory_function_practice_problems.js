//3.

//Rules
// 1. Function factory needs to return an invoice Object w/ phone and internet as properties
// and total as a method
// 2. default value for phone = 3000, internet = 5500
// 3. The function takes an object argument whose attributes override the default values.

// function createInvoice(services = {}) {
//   let phoneService = services.hasOwnProperty('phone') ? services['phone'] : 3000;
//   let internetService = services.hasOwnProperty('internet') ? services['internet'] : 5500;

//   return {
//     phone: phoneService,
//     internet: internetService,

//     total() {
//       return this.phone + this.internet;
//     },
//   }
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

// let services = {}

//4. Payments
// Can take the following forms
// Payment for one service, e.g., { internet: 1000 } or { phone: 1000 }.
// Payment for both services, e.g., { internet: 2000, phone: 1000 }.
// Payment with just an amount property, e.g., { amount: 2000 }.

//function factory should return an object that has an amount paid for each serviece and total
// if amount is present use amount as total else use the sum of the internet and phone charges

function createPayment(services = {}) {
  let hasAmount = services.hasOwnProperty('amount');
  let phonePayment = services.hasOwnProperty('phone') ? services['phone'] : 0;
  let internetPayment = services.hasOwnProperty('internet') ? services['internet'] : 0;

  return {
    phonePayment,
    internetPayment,

    total() {
      if (hasAmount) return services['amount'];

      return this.phonePayment + this.internetPayment;
    }
  }
}


function paymentTotal(payments) {
  return payments.reduce((sum, payment) => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

// console.log(paymentTotal(payments));      // => 24000

//5. Update createInvoice function sot that it can add payment(s) to Invoices
// need to add methods for addPayment, addPayments

function createInvoice(services = {}) {
  let phoneService = services.hasOwnProperty('phone') ? services['phone'] : 3000;
  let internetService = services.hasOwnProperty('internet') ? services['internet'] : 5500;

  return {
    phone: phoneService,
    internet: internetService,
    payments: 0,

    total() {
      return this.phone + this.internet;
    },

    addPayment(paymentObj) {
      this.payments += paymentObj.total();
    },

    addPayments(paymentArr) {
      let totalPayment = paymentArr.reduce((sum, paymentObj) => {
        return sum + paymentObj.total()
      }, 0);

      this.payments += totalPayment;
    },

    amountDue() {
      return this.total() - this.payments;
    }
  }
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