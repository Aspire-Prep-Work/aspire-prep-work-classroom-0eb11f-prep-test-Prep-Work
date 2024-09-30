const challengeOne = require('./challengeOne')

test('checks if number is 100 or both numbers equal to 100', () => {
    expect(challengeOne(50, 50)).toBe(true)
    expect(challengeOne(100, 10)).toBe(true)
    expect(challengeOne(10, 100)).toBe(true)
    expect(challengeOne(65, 75)).toBe(false)
    expect(challengeOne(4, 44)).toBe(false)
})