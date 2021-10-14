const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
} = require('./verifyPassword')

// Should not be Null
test("return false given an empty string", () => {
    expect(isNotNull("")).toBe(false)
})

// Not longer than 8 characters
test("return false given a password 9 characters or longer", () => {
    expect(hasRightLength("12345678a")).toBe(false)
})

// 
test("return true given a password 8 characters or shorter, a letter and a number", () => {
    expect(hasRightLength("123456aA")).toBe(true)
})

test("return true given a password that has at least 1 or more lowerCase characters", () => {
    expect(hasLowerCaseCharacter("abcdefgH")).toBe(true)
})

test("return true given a password that has at least 1 or more upperCase characters", () => {
    expect(hasUpperCaseCharacter("ABCDEfgh")).toBe(true)
})
test("return false given a password that is 8 upperCase characters", () => {
    expect(hasUpperCaseCharacter("ABCDEFGH")).toBe(false)
})

test("return true given a password that has a digit", () => {
    expect(hasDigit("1234567")).toBe(true)
})

test("Minimum of 3 conditions are true", () => {
    expect(minimumConditionsReached([true, true, true, false, false])).toBe(true);
});

test("return true given password is verified", () => {
    expect(verifyPassword("abc1H")).toBe(true)
})