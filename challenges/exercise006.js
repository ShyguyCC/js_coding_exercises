/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
    if (arr === undefined) throw new Error("arr is required");
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
            temp += arr[i];
        }
    }
    return temp;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
    if (str === undefined) throw new Error("str is required");
    var arr = ['C', 'G', 'T', 'A'];
    var temp = "";
    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < str.length; k++) {
            if (str[k + 1] != null) {
                temp = str.substring(k, k + 1);
                if (arr[i] == temp) {
                    return true;
                }

            }
        }
    }
    return false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
    //first we create an array with paired dna, then use map to go through the array and check if s is in the temp array IE A = T and join it onto a string and return the finished product.
    if (str === undefined) throw new Error("str is required");
    const tempArray = { "T": "A", "A": "T", "G": "C", "C": "G" }
    const isValid = isValidDNA(str)
    if (isValid)
        return ([...str].map(s => tempArray[s])).join('')
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
    if (n === undefined) throw new Error("n is required");
    //go though all vaules up to n to check if it can be divided, if not its a prime number.
    for (var i = 2; i < n; i++)
        if (n % i == 0) return false;
    return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
    if (n === undefined) throw new Error("n is required");
    if (fill === undefined) throw new Error("fill is required");



    var tempArray = [];
    for (var i = 0; i < n; i++) {
        tempArray[i] = [];
        for (var k = 0; k < n; k++) {
            tempArray[i][k] = fill;
        }
    }
    return tempArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
    if (day === undefined) throw new Error("day is required");

    var noOfStaff = 0;
    const arr = staff.map(st => st.rota); //get the rota from each staff and add it to its own array.
    //for each staff that includeds input day add to the staff count, if its above 3 then return true. if the array doesnt include the day return zero instead.
    // ? is like an if statement, where as ar.includes = true then noofstaff++ is called, if false then 0 is called.
    arr.forEach(ar => ar.includes(day) ? noOfStaff++ : 0)
    return noOfStaff >= 3;

};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
