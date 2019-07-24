module.exports = {
    myHeavyTask: args => {

      return new Promise((resolve,reject) =>{
        try {
          // long running CPU intensive task.
          let val = 100;
          for (let i = 0; i < 1000; i++) {
            val += i;
          }
          resolve(val);
        } catch (e) {
          reject(e);
        }
       
      });
    
    },
  };