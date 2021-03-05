// JavaScript source code
const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");
//take in an int number and sum the number together
describe("sumDigits", () => {

    test("return the sum of all digit of given number", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(2537)).toBe(17);
        expect(sumDigits(2563198)).toBe(34);
    });
    test("Check for zeros", () => {
        expect(sumDigits(1203)).toBe(6);
        expect(sumDigits(25037)).toBe(17);
        expect(sumDigits(82061539)).toBe(34);
    });
});

describe("createRange", () => {

    test("Simple Range.", () => {
        expect(createRange(0, 6, 2)).toEqual([0, 2, 4, 6]);

    });

    test("Complex Range.", () => {
        expect(createRange(3, 52, 6)).toEqual([3, 9, 15, 21, 27, 33, 39, 45, 51]);
    });

    test("Range by 1 from 0 to 20 ", () => {
        expect(createRange(0, 20, 1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14, 15, 16, 17, 18, 19, 20]);
    });

});

describe("getScreentimeAlertList", () => {
    //in put an array with username, name and a screentime array, with input within screentime just like the examples given above the function.
    const input = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
        {
            username: "bob_a_291",
            name: "Bob Apple",
            screenTime: [
                { date: "2019-05-01", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-05-02", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-05-04", usage: { mapMyRun: 20, whatsApp: 10, facebook: 40, safari: 80 } },
            ]
        },]
    test("Return Names of people who used their screen for more than 100 min.", () => {
        expect(getScreentimeAlertList(input, "2019-05-04")).toStrictEqual(["beth_1234","bob_a_291"]);
    });

});

describe("hexToRGB", () => {
    test("Change Hex FF1133 to color format.", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
    });
    test("Change Hex FF7337 to color format.", () => {
        expect(hexToRGB("#FF7337")).toEqual("rgb(255,115,55)");
    });
    test("Change Hex ABDDFC to color format.", () => {
        expect(hexToRGB("#ABDDFC")).toEqual("rgb(171,221,252)");
    });
});
describe("findWinner", () => {
    const board1 = [
        ["X", "X", null],
        ["X", null, "0"],
        ["X", null, "0"]
    ];
    test("should return X if player X has won vertical", () => {
        expect(findWinner(board1)).toEqual("X");
    })
    const board2 = [
        ["X", "X", "X"],
        ["0", null, "0"],
        [null, null, "0"]
    ];
    test("should return X if player X has won horizontal", () => {
        expect(findWinner(board2)).toEqual("X");
    })
    const board3 = [
        [null, "X", "0"],
        [null, "0", "X"],
        ["0", null, "X"]
    ];
    test("should return 0 if player 0 has won diagonal", () => {
        expect(findWinner(board3)).toEqual("0");
    })
    const board4 = [
        ["X", "0", null],
        ["0", "X", "0"],
        [null, null, "X"]
    ];
    test("should return X if player X has won diagonal", () => {
        expect(findWinner(board4)).toEqual("X");
    })
    const board5 = [
        [null, null, null],
        ["X", null, "0"],
        ["X", null, "0"]
    ];
    test("should return null if no one has won", () => {
        expect(findWinner(board5)).toEqual(null);
    })
});
