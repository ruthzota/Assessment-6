const {shuffleArray} = require('./utils')

describe('shuffleArray should give a random array ', () => {
    // CODE HERE
    test('shuffleArray should give random array', () => {
        expect(shuffleArray).not.toContain([shuffleArray]);
    });
})
