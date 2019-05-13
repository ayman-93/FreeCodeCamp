const digites = num => {
  num = num
    .toString()
    .split("")
    .reverse();

  let array = [];
  for (let i = 0; i < num.length; i++) {
    array.push(num[i] + "".padEnd(i, "0"));
  }

  array.reverse();
  return array;
};

const convertToRoman = number => {
  let arrayOfnum = digites(number).filter(n => n != 0);
  let roman = "";
  let zeros;
  let base;
  let subBase;

  for (let num of arrayOfnum) {
    zeros = num.split("");
    zeros.shift();
    base = "1" + zeros.join("");

    switch (base) {
      case "1": {
        switch (num) {
          case "1":
            roman += "I";
            break;

          case "2":
            roman += "II";
            break;

          case "3":
            roman += "III";
            break;
          case "4":
            roman += "IV";
            break;
          case "5":
            roman += "V";
            break;
          case "6":
            roman += "VI";
            break;
          case "7":
            roman += "VII";
            break;
          case "8":
            roman += "VIII";
            break;
          case "9":
            roman += "IX";
            break;
        }
        break;
      }
      case "10": {
        subBase = num / 10;
        if (num < 40) {
          for (let i = 0; i < subBase; i++) {
            roman += "X";
          }
        } else if (num == 40) {
          roman += "XL";
        } else if (num < 90) {
          roman += "L";
          for (let i = 0; i < subBase - 5; i++) {
            roman += "X";
          }
        } else {
          roman += "XC";
        }
        break;
      }
      case "100": {
        subBase = num / 100;
        if (num < 400) {
          for (let i = 0; i < subBase; i++) {
            roman += "C";
          }
        } else if (num == 400) {
          roman += "CD";
        } else if (num < 900) {
          roman += "D";
          for (let i = 0; i < subBase - 5; i++) {
            roman += "C";
          }
        } else {
          roman += "CM";
        }
        break;
      }
      case "1000": {
        subBase = num / 1000;
        for (let i = 0; i < subBase; i++) {
          roman += "M";
        }
        break;
      }
    }
  }

  return roman;
};

console.log(convertToRoman(700));
