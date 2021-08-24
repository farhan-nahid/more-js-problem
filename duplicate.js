// remove duplicate words from an array

function removeDuplicate(array) {
  let unique = [];
  for (const word of array) {
    if (unique.indexOf(word) == -1) {
      unique.push(word);
    }
  }
  return unique;
}

console.log(
  removeDuplicate([
    "asd",
    "lkj",
    "lpo",
    "uyt",
    "poi",
    "pol",
    "asd",
    "gfd",
    "lpo",
    "lpo",
    "uyt",
    "poi",
  ])
);

// remove duplicate numbers from an array

function duplicateNumber(numbers) {
  let uniqueNumber = [];
  for (const number of numbers) {
    if (uniqueNumber.indexOf(number) == -1) {
      uniqueNumber.push(number);
    }
  }
  return uniqueNumber;
}

console.log(duplicateNumber([1, 2, 1, 3, 1, 4, 2, 5, 4, 6, 3, 7, 6, 8, 5, 9]));
