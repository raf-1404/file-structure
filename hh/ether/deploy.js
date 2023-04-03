/*async means that the lines of code are not executed line by line they are executed simultaneously , to check the state of the function on calling it returns a promise in pending: initial state, neither fulfilled nor rejected.
or fulfilled: meaning that the operation was completed successfully.
or rejected: meaning that the operation failed.*/
async function main(){
    function promise(){
        
    }

}

main().then(()=>process.exit(0))
      .catch((error)=> {console.error();
                        process.exit(1);}); /*This code is for promise returning (async function in js only) it basically waits for an async function to execute
                        if it executes withour errors the code in the .then() is executed otherwise the code in the .catch() is executed  in then there
                        () has no parameters for successful execution for main function and no function name next to () because there is no subfunction
                        (error) is parameter for main no function name next to (error) because there is no subfunction
                        */
