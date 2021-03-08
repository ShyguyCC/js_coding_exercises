const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
    //go through array, if number is found check if next number is not null and return that.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == n && nums[i + 1] != null) {
            return nums[i + 1];
        }
    }
    return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
    //as we have 2 numbers to count i did 2 vars and did a count when one is true
    let letter_CountOne = 0;
    let letter_CountZero = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "1") {
            letter_CountOne += 1;
        }else if (str.charAt(i) == "0") {
            letter_CountZero += 1;
        }
    }
    return {1:letter_CountOne,0:letter_CountZero};
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
    //we make the int to string, then split it all up in an array, then reverse the string and then make it whole again with join
    return (parseFloat(n.toString().split('').reverse().join('')));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
    //just sum up everything in the array within array.
    let sumTotal = 0;
    for (let i = 0; i < arrs.length; i++) {
        for (let k = 0; k < arrs[i].length; k++) {
            sumTotal += arrs[i][k];
        }
    }
    return sumTotal;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
    //if the array is 2 or more in length then switch the first and last numbers around.
    if (arr.length > 1) {
        const tempNumb = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = tempNumb;
    }
    return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
    //for each key with a value in haystack, check if the value is a string. then change the values to lower case and check if they match.
    for (const [key, value] of Object.entries(haystack)) {
        if (typeof (value) == "string") {
            if (value.toLowerCase().includes(searchTerm.toLowerCase()) == true){
                return true;
            }
        }
    }


    return false;
};

const getWordFrequencies = str => {
    if (str === undefined) throw new Error("str is required");
    //we split up str into words, then we have an array of occurences, then we check if the number has already been counted. if not it'll = 1 if there is add another to it.
    const words = str.toLowerCase().replace(/[!?.,:;]/g, "").split(" ");
    let occurrences = {};
    words.map((word) => {
        occurrences[word] === undefined
            ? (occurrences[word] = 1)
            : occurrences[word]++;
    });
    return occurrences;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
