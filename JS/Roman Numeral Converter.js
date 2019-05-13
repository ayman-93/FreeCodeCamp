function convertToRoman(num) {
  let ruman = "";
  num = digites(num);
  let newNum = num.slice();

  console.log(newNum);

  //   for(let i =0 ; i<num.length ;i++){
  //       if (num[i].length>1){
  //           console.log(num[i][0]);
  //           newNum.splice(i,1)

  //           newNum.push()
  //       }
  //   }
  for (n of newNum) {
    console.log(n);
    switch (n) {
      case "0":
        ruman += "";
        break;
      case "1":
        ruman += "I";
        break;

      case "2":
        ruman += "II";
        break;

      case "3":
        ruman += "III";
        break;
      case "4":
        ruman += "IV";
        break;
      case "5":
        ruman += "V";
        break;
      case "6":
        ruman += "VI";
        break;
      case "7":
        ruman += "VII";
        break;
      case "8":
        ruman += "VIII";
        break;
      case "9":
        ruman += "IX";
        break;
      case "10":
        ruman += "X";
        break;
      case "50":
        ruman += "L";
    }
  }

  return ruman;
}

const digites = num => {
  num = num
    .toString()
    .split("")
    .reverse();
  console.log(num.length);

  let array = [];
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);

    array.push(num[i] + "".padEnd(i, "0"));
  }
  array.reverse();
  console.log(array);
  return array;
};
console.log(convertToRoman(4));

console.log("".padEnd(1, "0"));

console.log(digites(1232));

// convertToRoman(36);

let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
let tens = [
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX"
];
let twintes = [
  "XX",
  "XXI",
  "XXII",
  "XXIII",
  "XXIV",
  "XXV",
  "XVI",
  "XXVII",
  "XXVIII",
  "XXIX"
];
let thrtines = [
  "XXX",
  "XXXI",
  "XXXII",
  "XXXIII",
  "XXXIV",
  "XXXV",
  "XXVI",
  "XXXVII",
  "XXXVIII",
  "XXXIX"
];
let fourtens = [
  "XXXX",
  "XXXXI",
  "XXXXII",
  "XXXXIII",
  "XXXXIV",
  "XXXXV",
  "XXXVI",
  "XXXXVII",
  "XXXXVIII",
  "XXXXIX"
];
let fiftens = [
  "L",
  "LI",
  "LII",
  "LIII",
  "LIV",
  "LV",
  "LVI",
  "LVII",
  "LVIII",
  "LIX"
];
let sixten = [
  "LX",
  "LXI",
  "LXII",
  "LXIII",
  "LXIV",
  "LXV",
  "LXVI",
  "LXVII",
  "LXVIII",
  "LXIX"
];
let aa = ["s", "d"];
let v = "v,v,d";
aa.splice(0, 1, v);
console.log(aa);
