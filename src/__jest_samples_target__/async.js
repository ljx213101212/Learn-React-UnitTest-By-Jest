export class AsyncUtil {

    static fetchData = (callback) =>{
        let data = "peanut butter";
        callback(data);
    }
 
    static fetchDataAsyncGood = () =>{
        return new Promise((resolve,reject)=> {
            resolve("peanut butter");
        });
    }

    static fetchDataAsyncBad = () =>{
        return new Promise((resolve, reject) =>{
            reject("error");
        });
    }

    static fetchDataAsyncBadThrow = () =>{
        return new Promise((resolve, reject) =>{
            throw new Error("error");
        });
    }

    // useCallback(
    //     () => {
    //         callback
    //     },
    //     [input],
    // )
}