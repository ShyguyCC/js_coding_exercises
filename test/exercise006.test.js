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
describe("isItPrime", () => {
    test("return true depending on whether it is a prime number or not", () => {

        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(31)).toBe(true);
        expect(isItPrime(67)).toBe(true);
        expect(isItPrime(97)).toBe(true);
    });
    test("return false depending on whether it is a prime number or not", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(6)).toBe(false);
        expect(isItPrime(12)).toBe(false);
        expect(isItPrime(54)).toBe(false);
        expect(isItPrime(86)).toBe(false);
        expect(isItPrime(24)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("3 by 3 array of foo", () => {
        const expected = [
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]
        ]

        let results = createMatrix(3, "foo");
        expect(results.toString()).toBe(expected.toString());
    });

    test("5 by 5 array of bar", () => {
        const expected = [
            ["bar", "bar", "bar", "bar", "bar"],
            ["bar", "bar", "bar", "bar", "bar"],
            ["bar", "bar", "bar", "bar", "bar"],
            ["bar", "bar", "bar", "bar", "bar"],
            ["bar", "bar", "bar", "bar", "bar"],
        ]
        let results = createMatrix(5, "bar");
        expect(results.toString()).toBe(expected.toString());
    });
});

// Monday Tuesday Wednesday Tuesday Friday Saterday Sunday

describe("areWeCovered", () => {
    test("Return true if 3 workers on a day have been covered", () => {
        const staff = [
            { name: "Bob", rota: ["Friday", "Saturday"] },
            { name: "Betty", rota: ["Friday", "Wednesday", "Sunday"] },
            { name: "Mortimer", rota: ["Tuesday", "Monday"] },
            { name: "Bella", rota: ["Wednesday", "Thursday"] },
            { name: "Cassandra", rota: ["Thursday", "Tuesday"] },
            { name: "Ciaran", rota: ["Monday", "Wednesday", "Friday"] },
            { name: "Mike", rota: ["Monday", "Saturday", "Tuesday", "Wednesday"] }
        ]
        expect(areWeCovered(staff, "Friday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Monday")).toBe(true);
    });
    test("Return false if 2 or less workers on a day have been covered", () => {
        const staff = [
            { name: "Bob", rota: ["Friday", "Saturday"] },
            { name: "Betty", rota: ["Friday", "Wednesday", "Sunday"] },
            { name: "Mortimer", rota: ["Tuesday", "Monday"] },
            { name: "Bella", rota: ["Wednesday", "Thursday"] },
            { name: "Cassandra", rota: ["Thursday", "Tuesday"] },
            { name: "Ciaran", rota: ["Monday", "Wednesday", "Friday"] },
            { name: "Mike", rota: ["Monday", "Saturday", "Tuesday", "Wednesday"] }
        ]
        expect(areWeCovered(staff, "Thursday")).toBe(false);
        expect(areWeCovered(staff, "Saturday")).toBe(false);
        expect(areWeCovered(staff, "Sunday")).toBe(false);
    });
});