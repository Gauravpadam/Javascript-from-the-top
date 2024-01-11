// MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/fetch

// Fetch API is a replacement of XMLHttprequest
// Fetch is a powerful API, Works on two objects: request and response
// Fetch returns a promise, Which is then consumed to initialize the global response object

// Fetch is used to make network requests
// One thing to note here,
// The request is only rejected IF some network error occurs;
// ALL other types of errors are counted as a response(eg. 404 , 403)

// One of the ways to write fetch

fetch('https://api.github.com/users/Gauravpadam')
.then((Response) => {
    if (Response.ok){
        return Response.json()
    }
})
.then((user) => {
    console.log(user.bio);
})
.catch((error) => {
    console.log(`ERROR: ${error}`);
})
.finally(() => {
    console.log("Fetch complete");
})

// Another way, Using async await helper

fetch('https://api.github.com/users/Gauravpadam')
.then(async (Response) => {
    if (Response.ok){
        const data = await Response.json()
        console.log(data.bio);
    }
})
.catch((error) => {
    console.log(`ERROR: ${error}`);
})
.finally(() => {
    console.log("Fetch complete");
})

// Completely your choice
// Reading the docs is **highly recommended**

// Also, The anomaly where fetch results were way quicker than other promises in 02_promises.js
// That happens because fetch works with a microtask queue / High priority queue; Which has elevated priority over the normal callback queue
// As soon as a task is ready it will be launched without any wait, onto the call stack