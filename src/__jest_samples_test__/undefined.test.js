const targetObj = require('../__jest_samples_target__/undefined.js');
//import sum from '../__jest_samples_target__/sum';

test('null', () => {
    const n = targetObj.getUndefined();
    let testThread = (val) => {
        // expect(val).toBeNull();
        // expect(val).toBeDefined();
        expect(val).not.toBeUndefined();
        // expect(val).not.toBeTruthy();
        // expect(val).toBeFalsy();
    }
    testThread(n.val1);
});

/**
 * @see https://stackoverflow.com/questions/42827054/how-do-i-run-a-single-test-using-jest
 */
test.only('this will be the only test that runs', () => {
    const n = targetObj.getUndefined();
    expect(n.val2).toBeNull();
});