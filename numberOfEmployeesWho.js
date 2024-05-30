var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let result = 0;
  let n = hours.length;

  for (let i = 0; i < n; i++) {
    if (hours[i] >= target) {
      result += 1;
    }
  }
  return result;
};


let check = numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4] , 2);
console.log(check)