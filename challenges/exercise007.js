/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
    if (n === undefined) throw new Error("n is required");
    //make an array from number by making it a string then making sure the components are a number not a string.
    var tempArr = Array.from(n.toString()).map(Number);
    var sum = 0;
    for (var i = 0; i < tempArr.length; i++) {
        sum += tempArr[i];
    }
    return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
    if (end === undefined) throw new Error("end is required");
    var tempArr = [];
    var counter = 0;
    //for loop starting at start, continue until more than end and iterate by step amount.
    for (var i = start; i <= end; i += step) {
        tempArr[counter] = i;
        counter++;
    }
    return tempArr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
    if (date === undefined) throw new Error("date is required");
    //create the return array.
    var screenArr = [];
    for (var i = 0; i < users.length; i++) {
        var totalUserMin = 0;
        //get the screentime for each user and check if the dates match, if they do.
        //objects.values gets the whole array of varables of usage, then from there we have an foreach int in the array add it to the total user time.
        //then if the time is over 100 push that user onto the array.
        users[i].screenTime.forEach(d => {
            if (d.date == date) {
                var dailyscreen = Object.values(d.usage);
                dailyscreen.forEach(min => { totalUserMin += min; });
            };
        });
        if (totalUserMin > 100) {
            //push better than using a counter to add from the start.
            screenArr.push(users[i].username);
        };
    };
    return screenArr;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
    if (hexStr === undefined) throw new Error("hexStr is required");


    //parseint base 16 is hexidecimal system, 1 to 9 a to f. from there if we can get the parts of the string we need to check what is red green and blue from hexi to int format.
    //we get 1 to 3 as thats FF, leaving the # away as we dont need that.
    redNumb = parseInt(hexStr.substring(1, 3), 16);
    greenNumb = parseInt(hexStr.substring(3, 5), 16);
    blueNumb = parseInt(hexStr.substring(5, 7), 16);
    //added to return to get correct outcome.
    return 'rgb(' + redNumb + ',' + greenNumb + ',' + blueNumb + ')';

};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
//there are 3 directions that a player can win, horizontal, vertical and diagonal.
//we are able to check for horizontal and vertical using for loops where as diagonal is more tricky so im using a big if statment.
const findWinner = board => {
    if (board === undefined) throw new Error("board is required");
    //goes through 3 coloms and check if the next 3 on the row is the same and returns the first element on that which will be the winner. This is to find horizontal.
    for (var i = 0; i < 3; i++) {
        if (board[i][0] == "X" && board[i][1] == "X" && board[i][2] == "X" || board[i][0] == "0" && board[i][1] == "0" && board[i][2] == "0") {
            return board[i][0];
        }
    }
    for (k = 0; k < 3; k++) {
        //same as before but for vertical.
        if (board[0][k] == "X" && board[1][k] == "X" && board[2][k] == "X" || board[0][k] == "0" && board[1][k] == "0" && board[2][k] == "0") {
            return board[0][k];
        }
    }
    //im hard coding wining from diagonal, it may not be the best but it works.
    if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X" || board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
        return "X";
    }
    else if (board[0][0] == "0" && board[1][1] == "0" && board[2][2] == "0" || board[0][2] == "0" && board[1][1] == "0" && board[2][0] == "0") {
        return "0";
    } 
    //if havent returned by end of funtion return null;
    return null;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
