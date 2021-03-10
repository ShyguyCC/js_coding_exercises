function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
   //we use the filter function to add nubmers that are less than one into nums and return that.
    return nums.filter(nums => nums < 1);

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");
    //using filter and the starts with funtion from string we can filter the names that start with char.
    return names.filter(names => names.startsWith(char));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
    //as this is quite the same as the function above but instead of the first letter your just seeing if "to " with a space is at the start
    return words.filter(words => words.startsWith("to "));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  //we use funtion isinteger to check if nums is a whole number, then add that to the return array.
  return nums.filter(nums => Number.isInteger(nums));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
//we are using map as we are returning the results we are getting by itterating through the array.
//to get through to displayName like an object we use the property name to call that part of the array to bring it back to the map.
  return users.map(users => users.data.city.displayName);

}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
    // return tempArray;
    //we use map as we are returning everything from the array and we put in the math.round() part of the for loop into the map function as thats all that we were doing.
    return nums.map(nums => Math.round(Math.sqrt(nums) * 100) / 100);

}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  //   return tempArray;
//as we have an if statement within the for loop we can exchange that with a filter which we input the if statement to return the array that we were creating before.
  return sentences.filter(sentences => sentences.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
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
