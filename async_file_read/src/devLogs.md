1. res.send()
   res.send("Server is running");
   Use it when you're sending a generic response.

2. res.json()

res.json({
success: true,
message: "Server is running"
});
Use this when your API is returning JSON data.
For our backend work, this will be your most common response method.

3 . res.status(200).json()

This explicitly sets the HTTP status code and sends JSON.

res.status(200).json({
success: true,
message: "Server is running"
});

For a successful request, 200 is already the default for a normal response, so these two are effectively equivalent

res.json({ message: "OK" }); or res.status(200).json({ message: "OK" });

I personally want you to get into the habit of explicitly specifying meaningful status codes when we're building actual APIs:

res.status(201).json(...) // created
res.status(200).json(...) // successful
res.status(400).json(...) // bad request
res.status(401).json(...) // unauthenticated
res.status(403).json(...) // forbidden
res.status(404).json(...) // not found
res.status(500).json(...) // server error

//wrong piece below

app.get("/health", (req, res) => {
return { message: "Server is running" };
});

you need res.json({ message: "Server is running" });

That return is useful when you want to stop executing the rest of the handler:

if (!user) {
return res.status(404).json({
message: "User not found"
});
}

// code below won't execute if user wasn't found

////

routes declare router using express and declare routes using controllers

controllers call services to return process data as response .. handle http requests/responses

services holds logic

//////////

The biggest rule I want you to lock in is:

Controller talks HTTP. Service talks business/data logic.

So req and res generally belong in the controller, not the service.
