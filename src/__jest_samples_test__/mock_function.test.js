import User from '../__jest_samples_target__/mockp_function'
import axios from 'axios';

const mockCallback = jest.fn(x => 42 + x);
mockCallback(1);
mockCallback(10);

test("test mockup function", ()=>{
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);
    // The first argument of the first call to the function was 1
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    // The first argument of the second call to the function was 10
    expect(mockCallback.mock.calls[1][0]).toBe(10);
    // The return value of the first call to the function was 1 + 42 = 43
    expect(mockCallback.mock.results[0].value).toBe(43);
});

test("test mockup return values", ()=>{
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined

    myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce('x')
        .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
});

jest.mock('axios');
test("test module", ()=>{
    const users = [{name: 'xiaoming fake'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))
    return User.all().then(data => expect(data).toEqual(users));
});


