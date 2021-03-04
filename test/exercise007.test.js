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