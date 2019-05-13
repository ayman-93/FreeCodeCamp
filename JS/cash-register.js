// function checkCashRegister(price, cash, cid) {
//   let change = cash-price;
//   let cidObj = {
//     PENNY: 0.01,
//     NICKEL: 0.05,
//     DIME: 0.1,
//     QUARTER: 0.25,
//     ONE: 1,
//     FIVE: 5,
//     TEN: 10,
//     TWENTY: 20,
//     "ONE HUNDRED": 100,
//   };
// console.log(cidObj['DIME']);

//   let cashInCid = cid.reduce((a,u) => a+u[1],0)
//   let msg =  {status: "", change: []};
//     if (change>cashInCid){
//         msg.status = "INSUFFICIENT_FUNDS";
//     } else if (change === cashInCid){
//         msg.status = "CLOSED";
//     } else {
//         msg.status = "OPEN";
//     }

//     for(let i in cid){
//         console.log(cidObj[cid[i][0]]);
//         if (change >= cidObj[cid[i][0]] && change >= cid[i][1])
//           msg.change.push(cid[i]);

//     }

//     console.log(msg.change);

//              // Here is your change, ma'am.
//              return msg;
// }

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//   ])
// );
//not mine
var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);

//  {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
