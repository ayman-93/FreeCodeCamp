const rot13 = str => {
  // LBH QVQ VG!
  str = str.toUpperCase();
  let decoded = "";
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index = '';
  console.log(alphabet.indexOf(str));

  for (let letter of str) {
      if (alphabet.indexOf(letter) === -1){
          decoded += letter;}
          else{
     index = (alphabet.indexOf(letter) + 13) % 26;
    decoded += letter === " " ? " " : alphabet[index];}
  }
  return decoded;
};

// Change the inputs below to test
console.log(rot13("!"));
// console.log(rot13("serr PBQR PNZC"));
// console.log(rot13("ERR PBQR PNZC"));
