// JavaScript source code
//get functions from challenges exercise006.
const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {

    test("return sum of only 3 multiples", () => {
        const arr = [3, 6, 9, 12, 18];
        expect(sumMultiples(arr)).toBe(48);
    });
    test("return sum of only 5 multiples", () => {
        const arr = [5, 10, 20, 25, 35];
        expect(sumMultiples(arr)).toBe(95);
    });
    test("return sum of both 3 and 5 multiples", () => {
        const arr = [5, 3, 9, 25, 30];
        expect(sumMultiples(arr)).toBe(72);
    });

    test("return sum of both 3 and 5 multiples with non numbers added as well", () => {
        const arr = [5, 2, 9, 25, 30, 29, 23];
        expect(sumMultiples(arr)).toBe(69);
    });
})
    describe("isValidDNA", () => {

        test("Check Valid DNA", () => {
            expect(isValidDNA("CGTA")).toBe(true);
        });
        test("check invalid DNA", () => {
            expect(isValidDNA("DSFN")).toBe(false);
        });
        test("Valid for one letter", () => {
            expect(isValidDNA("ASFN")).toBe(true);
        });
    })

describe("getComplementaryDNA", () => {

    test("string of ACTG would have a complementary DNA string of TGAC", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });
    test("check string of AACCTTGG", () => {
        expect(getComplementaryDNA("AACCTTGG")).toBe("TTGGAACC");
    });
})