module.exports = function toReadable(number) {
  const dictionary = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };
  if (number < 20) {
    //condition for numbers 0..19
    return dictionary[number];
  } else if (number >= 20 && number <= 90 && number % 10 === 0) {
    //condition for numbers 20, 30, ... 90
    return dictionary[number];
  } else if (number === 100) {
    //condition for number 100
    return 'one hundred';
  } else if (number > 100 && number <= 900 && number % 100 === 0) {
    //condition for numbers 200, 300, ... 900
    let hundreds = dictionary[number / 100];
    return hundreds + ' hundred';
  } else if (number >= 20 && number <= 99 && number % 10 !== 0) {
    //condition for numbers 21, 22, ... 98, 99
    let tens = dictionary[Math.trunc(number / 10) * 10];
    let ones = dictionary[number % 10];
    return tens + ' ' + ones;
  } else if (number > 100 && number <= 999) {
    let hundredsNum = Math.trunc(number / 100);
    let tensNum = Math.trunc(number / 10);
    let onesNum = number % 10;
    let numReminder = number % 100;
    if (tensNum % 10 === 0) {
      //condition for numbers 101, 102, ... 909
      let hundreds = dictionary[hundredsNum];
      let ones = dictionary[onesNum];
      return hundreds + ' hundred ' + ones;
    } else if (number % 100 >= 10 && number % 100 <= 19) {
      //condition for numbers 111, 112, ... 919
      let hundreds = dictionary[hundredsNum];
      let tens = dictionary[number % 100]
      return hundreds + ' hundred ' + tens;
    } else if (numReminder >= 20 && numReminder <= 90 && numReminder % 10 === 0) {
      //condition for numbers 120, 130, ... 190
      let hundreds = dictionary[hundredsNum];
      let tens = dictionary[numReminder];
      return hundreds + ' hundred ' + tens;
    } else if (numReminder >= 20 && numReminder <= 99 && numReminder % 10 !== 0) {
      //condition for numbers 121, 622, ... 898, 999
      let hundreds = dictionary[hundredsNum];
      let tens = dictionary[Math.trunc(numReminder / 10) * 10];
      let ones = dictionary[numReminder % 10];
      return hundreds + ' hundred ' + tens + ' ' + ones;
    }
  }
}
