// write a function which reversed string

function reversedString(string) {
  let reverse = "";
  for (const letter of string) {
    reverse = letter + reverse;
  }
  return reverse;
}

console.log(reversedString("hey bro, Its string reversed function"));
