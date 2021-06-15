// async method
// callback hell -> better would be promises
// but async method is better than fs sync method as it offloads the read and write file when call and proceeds 
// to the next task. can be seen if you node 11-fsAsync.js

const { readFile, writeFile } = require('fs')
console.log('start');
readFile('./content/first.txt', 'utf-8' , (err, result) => {
    if (err)  {
        console.log(err);
    } else {
        const first = result;
        readFile('./content/second.txt', 'utf-8', (err, result) => {
            if (err) {
                console.log(err)
            } else {
                const second = result;
                writeFile(
                    './content/result-sync.txt',
                    `Here is the result ${first} ${second}`, (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('done with this task');
                        }
                    }
                )
            }
        })
    }
})
console.log('starting next task');