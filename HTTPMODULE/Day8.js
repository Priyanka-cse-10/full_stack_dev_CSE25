// create your own server using http module 
import http from "http"; // Import the built-in HTTP module

// Create the HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<h1>This is my own server</h1>");

    // Send normal text to the browser
    res.write("Hello Priyanka! Server is working.");

    // End the response
    res.end();
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});