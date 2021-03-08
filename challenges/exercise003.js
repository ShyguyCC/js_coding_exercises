function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
    //if array length = 0 return as is, other wise times the number with itself.
    if (nums.length == 0) {
        return nums;
    } else {
        for (let i = 0; i < nums.length; i++) {
            nums[i] = nums[i] * nums[i];
        }
    }
    return nums;
    
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
    //using some code from exersize one question one for capitalising first letter. go through array and if its not the first one cappitalise the first letter.
    let temp = "";
    for (let i = 0; i < words.length; i++) {
        if (i >= 1) {
            temp += words[i].substring(0, 1).toUpperCase() + words[i].substring(1, words[i].length);
        } else {
            temp += words[i];
        }
    }
    return temp;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
    //here we use 2 loops to count all the subjects within people.
    let counter = 0;
    for (let i = 0; i < people.length; i++) {
        for (let k = 0; k < people[i]['subjects'].length; k++) {
            counter++;
        }
    }
    return counter;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
    //goes thorugh the array, then checks if the ingredients array includes what we are looking for.
    for (let i = 0; i < menu.length; i++) {
        if (menu[i]['ingredients'].includes(ingredient) == true) {
            return true;
        }
    }
    return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
    //loop through array one to see if theres any in arr2 and if its already added dont add again.
    let counter = 0;
    let tempArray = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) == true && tempArray.includes(arr1[i]) == false) {
                tempArray[counter] = arr1[i];
                counter++;
        }
    }
    //then sort the finished array in ascending order.
    tempArray.sort();
    return tempArray;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
