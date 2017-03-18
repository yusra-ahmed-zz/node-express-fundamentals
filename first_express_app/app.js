// require the express module
var express = require("express");
// create an object from the express function which we contains methods for making requests and starting the server
var app = express();

// create a route for a GET request to '/' - when that route is reached, run a function
app.get('/', function(request, response){
    // inside of this callback we have two large objects, request and response
        // request - can contain data about the request (query string, url parameters, form data)
        // response - contains useful methods for determining how to respond (with html, text, json, etc.)
    // let's respond by sending the text Hello World!
    response.send('Hello World!');
})

// when a request comes in to /instructors/ANYTHING 
app.get('/instructor/:first_name', function(request,response){
    // let's capture the "dynamic" part of the URL, which we are called "first_name". The name that we give to this dynamic part of the URL will become a key in the params object which exists on the request object.

    // let's send back some text with whatever data came in the URL!
    response.send(`The name of this instructor is ${request.params.first_name}`)
});

// let's tell our server to listen on port 3000 and when the server starts, run a callback function that console.log's a message
app.listen(3000, function(){
    console.log("The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!");
});