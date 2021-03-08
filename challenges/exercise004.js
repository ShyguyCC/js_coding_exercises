function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
    //simple iterate through array and add anything less than 1 to another array.
    // var tempArray = [];
    // var counter = 0;
    // for (var i = 0; i < nums.length; i++) {
    //     if (nums[i] < 1) {
    //         tempArray[counter] = nums[i];
    //         counter++;
    //     }
    // }
    // return tempArray;
    //old code to remember above.

    //we use the filter function to add nubmers that are less than one into nums and return that.
    return nums.filter(nums => nums < 1);

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");
    //go through names, take the first letter and check if it matches with char, if so add to temp array and return that.
    // var tempArray = [];
    // var counter = 0;
    // for (var i = 0; i < names.length; i++) {
    //     if (names[i].substring(0, 1) == char) {
    //         tempArray[counter] = names[i];
    //         counter++;
    //     }
    // }
    // return tempArray;
    //old code to remember above.

    //using filter and the starts with funtion from string we can filter the names that start with char.
    return names.filter(names => names.startsWith(char));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
    // we use the function includes to see if theres a space after to so that it doenst flag when within a word
    let tempArray = [];
    let counter = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes("to ")) {
            tempArray[counter] = words[i];
            counter++;
        }
    }
    return tempArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let tempArray = [];
  let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        //check if the number can be devided by 1, if not it has a decimal.
        if (nums[i] % 1 == 0) {
            tempArray[counter] = nums[i];
            counter++;
        }
    }
    return tempArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  //here we get the city name by going through users and using the IDs: data city displayname and returning the new array.
  let tempArray = [];
    for (let i = 0; i < users.length; i++) {
        tempArray[i] = users[i]['data']['city']['displayName'];
    }
    return tempArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
    //use math.sqrt to find the square root and use math.round with *100) /100 to round the number to 2 decimal places if needed.
    let tempArray = [];
    for (let i = 0; i < nums.length; i++) {
        tempArray[i] = Math.round(Math.sqrt(nums[i]) * 100) / 100;
    }
    return tempArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let tempArray = [];
  let counter = 0;
    for (let i = 0; i < sentences.length; i++) {
        //to make it not case sensitive i made the if statement for both of them lowercase
        if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
            tempArray[counter] = sentences[i];
            counter++;
        }
    }
    return tempArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let tempArray = [];
    for (let i = 0; i < triangles.length; i++) {
        //here we use math max apply to get the highest number in the array we are looking at.
        tempArray[i] = Math.max.apply(null, triangles[i]);
    }
    return tempArray;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
