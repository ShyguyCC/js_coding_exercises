function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
    //using id fillings to return all fillings.
    return sandwich['fillings'];
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
    //same as previous function.
    if (person['city'] == "Manchester") {
        return true;
    } else {
        return false;
    }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
    //math.ceil returns a rounded upwards number. bus only holds 40 people.
    return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
    //goes through array, when sheep is found add to counter, return counter.
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "sheep") {
            counter++;
        }
    }
    return counter;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
    // Your code here!
    //we go to address within the array, then post code and only take the first letter to see if its M
    //then we check if the city is manchester, if both are correct then return true, if not then false;
    if (person['address']['postCode'].substring(0, 1) == "M" && person['address']['city'] == "Manchester") {
        return true;
    }
    return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
