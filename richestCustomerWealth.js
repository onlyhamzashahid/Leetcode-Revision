function findRichestCustomerWealth(accounts) {
    return Math.max(...accounts.map(customer => customer.reduce((a,b) => a+b, 0)))
    
}


let check = findRichestCustomerWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);

console.log(check)