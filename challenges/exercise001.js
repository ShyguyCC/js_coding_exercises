function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
    //code from helpful video, we take the first letter and change it to uppercase, then continue with the rest of the word.
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
    if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
    //adds on capitalize funtion, just return the first letters upper cased and . between them.
    return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
    //here we get the original price and add the vat rate by diving it by 100 and multiplying with the price ie 45% * 100 = .45 * 100 = 45. then 45 + 100 = 45.
    //then we use math round and number epsilon to round up any float values to 2 decimals.
    var temp = originalPrice + ((vatRate / 100) * originalPrice);
    temp = Math.round((temp + Number.EPSILON) * 100) / 100;
    console.log(temp);
    return temp;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
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
