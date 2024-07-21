async function consoleIt() {
    await new Promise((resolve, reject) => {
        setTimeout(resolve(), 2000);
    }).then(() => {
        console.log("Promsie fulfilled")
    })

    console.log("Outside promise")
}

consoleIt();

console.log("Outside async")

// output: with await
// Outside async
// Promise fulfilled
// Outside promise

// output: without await
// Outside promise
// Outside async
// Promise fulfilled
