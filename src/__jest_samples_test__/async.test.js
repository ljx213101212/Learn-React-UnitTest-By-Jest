import {AsyncUtil} from '../__jest_samples_target__/async';

/**
 * @see https://jestjs.io/docs/en/asynchronous
 */

//callback
test('the data is peanut butter(callback)', done => {
    function callback(data) {
      expect(data).toBe('peanut butter');
      done();
    }
    AsyncUtil.fetchData(callback);
});

//promises
test('the data is peanut butter(promises)', () => {
  return AsyncUtil.fetchDataAsyncGood().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the data is peanut butter(promises) error', () => {
   //https://jestjs.io/docs/en/expect#expectassertionsnumber
   expect.assertions(1);
   return AsyncUtil.fetchDataAsyncBad().catch(e => expect(e).toMatch('error'));
});

//Async/Await
test('the data is peanut butter', async () => {
  const data = await AsyncUtil.fetchDataAsyncGood();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await AsyncUtil.fetchDataAsyncBad();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(AsyncUtil.fetchDataAsyncGood()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(AsyncUtil.fetchDataAsyncBadThrow()).rejects.toThrow('error');
});





