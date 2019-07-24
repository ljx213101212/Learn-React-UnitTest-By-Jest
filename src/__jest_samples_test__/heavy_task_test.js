import Worker from 'jest-worker';
import { exportAllDeclaration } from '@babel/types';
async function main() {
    const worker = new Worker(require.resolve('./../__jest_samples_target__/heavy_task.js'));
  
    // run 2 tasks in parallel with different arguments
    const results = await Promise.all([
      worker.myHeavyTask({foo: 'bar'}),
      worker.myHeavyTask({bar: 'foo'}),
    ]);
  
    // console.log(results);
    return results;
  }
  


  test("test jest f worker", async (done)=>{
    await main().then((arr)=>{
        console.log(arr);
        done();
    }).catch(err=>{
        done();
    });
  });

  afterAll(() => setTimeout(() => process.exit(), 1000))
