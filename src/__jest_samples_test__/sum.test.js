const sum = require('../__jest_samples_target__/sum.js');
//import sum from '../__jest_samples_target__/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

