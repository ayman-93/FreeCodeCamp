const palindrome = str => {
  const REMOVE_SYMPLES = str
    .split("")
    .filter(
      litter =>
        litter.toLowerCase() !== litter.toUpperCase() ||
        (litter == +litter && litter !== " ")
    )
    .join("")
    .toLowerCase();

  if (!REMOVE_SYMPLES) {
    return true;
  } else if (
    REMOVE_SYMPLES ===
    REMOVE_SYMPLES.split("")
      .reverse()
      .join("")
  )
    return true;
  else return false;
};

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("1 eye for of 1 eye.$}{"));
console.log(palindrome("0_0 (: /- :) 0-0"));

// palindrome("eye");
