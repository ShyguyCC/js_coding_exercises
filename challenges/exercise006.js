const sumMultiples = arr => {
    if (arr === undefined) throw new Error("arr is required");
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        //if the number is a multiple of 3 or 5 add it to temp which will sum up all the numbers.
        if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
            temp += arr[i];
        }
    }
    return temp;
};

const isValidDNA = str => {
    if (str === undefined) throw new Error("str is required");
    const arr = ['C', 'G', 'T', 'A'];
    let temp = "";
    //using the DNA we know as valid as a array we can for loop it against the str array and check if there is any simularitys between the two.
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < str.length; k++) {
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

const getComplementaryDNA = str => {
    //first we create an array with paired dna, then use map to go through the array and check if s is in the temp array IE A = T and join it onto a string and return the finished product.
    if (str === undefined) throw new Error("str is required");
    const tempArray = { "T": "A", "A": "T", "G": "C", "C": "G" }
    const isValid = isValidDNA(str)
    if (isValid)
        return ([...str].map(s => tempArray[s])).join('')
};

const isItPrime = n => {
    if (n === undefined) throw new Error("n is required");
    //go though all vaules up to n to check if it can be divided, if not its a prime number.
    for (let i = 2; i < n; i++)
        if (n % i == 0) return false;
    return true;
};

const createMatrix = (n, fill) => {
    if (n === undefined) throw new Error("n is required");
    if (fill === undefined) throw new Error("fill is required");
    //we create a for loop of temp array adding an array within i, then another for loop adding the fill within the 2 arrays within temparray.
    let tempArray = [];
    for (let i = 0; i < n; i++) {
        tempArray[i] = [];
        for (let k = 0; k < n; k++) {
            tempArray[i][k] = fill;
        }
    }
    return tempArray;
};

function areWeCovered(staff, day) {
    if (staff === undefined)
        throw new Error("staff is required");
    if (day === undefined)
        throw new Error("day is required");

    let noOfStaff = 0;
    const arr = staff.map(st => st.rota);
    //get the rota from each staff and add it to its own array.
    //for each staff that includeds input day add to the staff count, if its above 3 then return true. if the array doesnt include the day return zero instead.
    // ? is like an if statement, where as ar.includes = true then noofstaff++ is called, if false then 0 is called.
    arr.forEach(ar => ar.includes(day) ? noOfStaff++ : 0);
    return noOfStaff >= 3;
}

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
