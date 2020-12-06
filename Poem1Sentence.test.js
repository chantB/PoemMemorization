const changeCount = require('./Poem1Sentence')

test('should print correct line', () => {
    expect(changeCount()).toBe(-1)
})

