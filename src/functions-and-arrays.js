// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else if (number1 === number2) {
    return number1;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let longestWord = words[0];
  if (words.length === 0) {
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum += number;
  }
  return sum;
}
// with reduce
function sumNumbers(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0;
  }
  let media = 0;
  const sum = sumNumbers(numbers2);
  media = sum / numbers2.length;

  return media;
}
averageNumbers(numbers2);

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words2, wordToSearch) {
  if (words2.length === 0) {
    return null;
  }

  for (let i = 0; i < words2.length; i++) {
    const word = words2[i];
    if (wordToSearch === word) {
      console.log(wordToSearch);
      return true;
    }
  }
  return false;
}
console.log(doesWordExist(words2, "matter"));

function doesWordExist(words2, wordToSearch) {
  if (words2.length === 0) {
    return null;
  }
  return words2.includes(wordToSearch);
}
doesWordExist(words2, "matter");
