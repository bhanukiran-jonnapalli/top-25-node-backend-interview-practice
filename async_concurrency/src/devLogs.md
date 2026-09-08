fs.readFile() with fs.promises returns a Promise.

An async function always returns a Promise, even when you return normal data.

A controller can consume the service Promise using await.

.then() is an alternative to async/await.

try/catch handles rejected Promises when using async/await.

Errors can propagate from service → controller, where the controller can send the HTTP error response.

res.json() sends the HTTP response; it is separate from the Promise returned by the controller.
Controller does not have to be async. It can return/use a Promise through .then().

We deliberately used:

getUsers() → async/await
getOrders() → async/await
getPayments() → .then()
Controller → async/await + try/catch

fs.readFile()

    ↓ Promise

Service

    ↓ Promise

Controller

    ↓ await / .then()

Actual data

    ↓

res.json()

    ↓

HTTP response
