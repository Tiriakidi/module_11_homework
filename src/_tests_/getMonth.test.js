import { getMonth }  from '../getMonth.js';

describe("test for getMonth function", () => {
    it("should show month", () => expect(getMonth(1)).toBe("январь"));
    it("should show unkhown", () => expect(getMonth(15)).toBe("неизвестно"));
    it("if string not a number should show unknown", () => expect(getMonth("abc")).toBe("неизвестно"));
});