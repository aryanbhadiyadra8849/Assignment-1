/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Aryan Bhadiyadra Student ID: 159773233 Date: 18/05/2024
*
********************************************************************************/ 

// Step 3: Creating the "Server Paths"
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Aryan Bhadiyadra",
    "Aryan Bhadiyadra: baryankumar-nareshbh@myseneca.ca",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// Step 4: Creating the "web server simulator" Function - "httpRequest"
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Step 5: Manually Testing the "httpRequest" Function
console.log(httpRequest("GET", "/")); // shows "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // shows "200: This assignment was prepared by [Student Name]"
console.log(httpRequest("POST", "/login")); // shows "200: User Logged In"
console.log(httpRequest("PUT", "/")); // shows "404: Unable to process PUT request for /"

// Step 6: Automating the Tests by creating an "automateTests" Function
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        const randVerb = testVerbs[Math.floor(Math.random() * testVerbs.length)];
        const randPath = testPaths[Math.floor(Math.random() * testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    setInterval(randomRequest, 1000);
}

// Step 7: Invoke the "automateTests" function
automateTests();
