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

const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
    if (date === undefined) throw new Error("date is required");
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

const hexToRGB = hexStr => {
    if (hexStr === undefined) throw new Error("hexStr is required");
    //parseint base 16 is hexidecimal system, 1 to 9 a to f. from there if we can get the parts of the string we need to check what is red green and blue from hexi to int format.
    //we get 1 to 3 as thats FF, leaving the # away as we dont need that.
    const redNumb = parseInt(hexStr.substring(1, 3), 16);
    const greenNumb = parseInt(hexStr.substring(3, 5), 16);
    const blueNumb = parseInt(hexStr.substring(5, 7), 16);
    //added to return to get correct outcome.
    return 'rgb(' + redNumb + ',' + greenNumb + ',' + blueNumb + ')';

};

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
