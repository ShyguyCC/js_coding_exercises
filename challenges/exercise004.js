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
    // let tempArray = [];
    // let counter = 0;
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i].includes("to ")) {
    //         tempArray[counter] = words[i];
    //         counter++;
    //     }
    // }
    // return tempArray;
    //old code to remember above.

    //as this is quite the same as the function above but instead of the first letter your just seeing if "to " with a space is at the start
    return words.filter(words => words.startsWith("to "));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // let tempArray = [];
  // let counter = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //       //check if the number can be devided by 1, if not it has a decimal.
  //       if (nums[i] % 1 == 0) {
  //           tempArray[counter] = nums[i];
  //           counter++;
  //       }
  //   }
  //   return tempArray;

  //we use funtion isinteger to check if nums is a whole number, then add that to the return array.
  return nums.filter(nums => Number.isInteger(nums));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  //here we get the city name by going through users and using the IDs: data city displayname and returning the new array.
  //let tempArray = [];
  //  for (let i = 0; i < users.length; i++) {
  //      tempArray[i] = users[i]['data']['city']['displayName'];
  //  }
  //  return tempArray;
//we are using map as we are returning the results we are getting by itterating through the array.
//to get through to displayName like an object we use the property name to call that part of the array to bring it back to the map.
  return users.map(users => users.data.city.displayName);

}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
    //use math.sqrt to find the square root and use math.round with *100) /100 to round the number to 2 decimal places if needed.
    // let tempArray = [];
    // for (let i = 0; i < nums.length; i++) {
    //     tempArray[i] = Math.round(Math.sqrt(nums[i]) * 100) / 100;
    // }
    // return tempArray;
    //we use map as we are returning everything from the array and we put in the math.round() part of the for loop into the map function as thats all that we were doing.
    return nums.map(nums => Math.round(Math.sqrt(nums) * 100) / 100);

}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // let tempArray = [];
  // let counter = 0;
  //   for (let i = 0; i < sentences.length; i++) {
  //       //to make it not case sensitive i made the if statement for both of them lowercase
  //       if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
  //           tempArray[counter] = sentences[i];
  //           counter++;
  //       }
  //   }
  //   return tempArray;
//as we have an if statement within the for loop we can exchange that with a filter which we input the if statement to return the array that we were creating before.
  return sentences.filter(sentences => sentences.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // let tempArray = [];
  //   for (let i = 0; i < triangles.length; i++) {
  //       //here we use math max apply to get the highest number in the array we are looking at.
  //       tempArray[i] = Math.max.apply(null, triangles[i]);
  //   }
  //   return tempArray;
  //as we are adding every element to the array we use map, then i input what i was doing within the forloop for the new array into the map funciton.
  return triangles.map(triangles => Math.max.apply(null, triangles));
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
