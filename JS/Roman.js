const convertToRoman = number => {
  number = digites(number);
  number = number.filter(n => n != 0);
  let newNum = number.slice();
  console.log(number);
  let base;
  let zeros;
  let hundredOfThosen;
  for (let i = 0; i < number.length; i++) {
    console.log(newNum[i]);

    zeros = newNum[i].split("");
    zeros.shift();
    if (newNum[i].length > 1) {
      //   newNum.splice(i,1);
      base = "1" + zeros.join("");
      console.log(base);

      let numberofchars = number[i] / base;
      console.log(numberofchars);

      switch (base) {
        case "10": {
          newNum.splice(i, 1);
          if (numberofchars < 4) {
            for (let i = 0; i < numberofchars; i++) {
              newNum.push("X");
            }
          } else if (numberofchars === 4) {
            newNum.splice(i, 0, "XL");
          } else if (numberofchars === 5) {
            newNum.push("L");
          } else {
            newNum.splice(i, 0, "L");
            for (let i = 0; i < numberofchars - 5; i++) {
              newNum.push("X");
            }
          }
          break;
        }

        case "100": {
          newNum.splice(i, 1);
          if (numberofchars < 4) {
            for (let i = 0; i < numberofchars; i++) {
              newNum.push("X");
            }
          } else if (numberofchars === 4) {
            newNum.splice(i, 0, "XL");
          } else if (numberofchars === 5) {
            newNum.push("D");
          } else {
            newNum.splice(i, 0, "L");
            for (let i = 0; i < numberofchars - 5; i++) {
              newNum.push("X");
            }
          }
          break;
        }
      }
    }
  }
  console.log(newNum);

  let ruman = newNum.filter(l => l != +l).join("");
  console.log(ruman);

  for (n of newNum) {
    console.log(n);
    switch (n) {
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
    }
  }
  console.log(ruman);

  return ruman;
};

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
console.log(convertToRoman(51));
