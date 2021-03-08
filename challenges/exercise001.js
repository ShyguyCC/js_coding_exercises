function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
    //code from helpful video, we take the first letter and change it to uppercase, then continue with the rest of the word.
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
    if (lastName === undefined) throw new Error("lastName is required");
    //adds on capitalize funtion, just return the first letters upper cased and . between them.
    return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
    //here we get the original price and add the vat rate by diving it by 100 and multiplying with the price ie 45% * 100 = .45 * 100 = 45. then 45 + 100 = 45.
    //then we use math round and number epsilon to round up any float values to 2 decimals.
    let temp = originalPrice + ((vatRate / 100) * originalPrice);
    temp = Math.round((temp + Number.EPSILON) * 100) / 100;
    return temp;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
    //using the past function but minus the precent price.
    let temp = originalPrice - ((reduction / 100) * originalPrice);
    temp = Math.round((temp + Number.EPSILON) * 100) / 100;
    return temp;
}

function getMiddleCharacter(str) {
    if (str === undefined) throw new Error("str is required");
    //we get the middle part of the string and see if it is odd or even.
    //then return two letters if even and just 1 if its odd.
    const MiddleChar = str.length / 2;
    if (str.length % 2 == 0) {
        return str.substring((MiddleChar - 1), (MiddleChar + 1));
    } else {
        return str.substring(MiddleChar, (MiddleChar + 1));
    }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
    //we create a loop going from the last letter of the word towards the first and create another string to return the reversed word.
    let tempString = "";
    for (let i = word.length - 1; i >= 0; i--) {
        tempString += word[i];
    }
    return tempString;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
    //used the code for the previous function to reverse words within an array.    
    let tempStringTwo = "";
    let tempStringArray = [];
    for (let i = 0; i < words.length; i++) {
        let tempStringOne = words[i];
        tempStringTwo = "";
        for (let k = tempStringOne.length - 1; k >= 0; k--) {
            tempStringTwo += tempStringOne[k];
        }
        tempStringArray.push(tempStringTwo);
    }
    return tempStringArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
    //we go through the array and any element with the type linux is added to the counter and then returned.
    let counter = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i]['type'] == "Linux") {
            counter++;
        }
    }
    return counter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
    //for loop to get the sum of array, then we devide by length of array and use mathround and number epsilon to round it to 2 decimal places.
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    sum = Math.round(((sum / scores.length) + Number.EPSILON) * 100) / 100;
    return sum;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  //simple fizz buzz using % to check if theres any decimals left and return if its able to be devided by 3 or 5 or both.
    if (n % 3 == 0 && n % 5 == 0) {
        return "fizzbuzz";
    } else if (n % 3 == 0) {
        return "fizz";
    } else if (n % 5 == 0) {
        return "buzz";
    }
    return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
