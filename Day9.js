// status code for network 200: success, 404: page not found
// Practise : routing using http odule in nodejs
import http from "http";
const server = http.createServer ((req, res) => {
    res.writeHead(200,()=> {
        console.log("connection established successfully")
    });
    if (req.url==="/") {
        
    }
res.end("<h1>This is home page</h1>");
})
server.listen (3001,() => {
    console.log("server is running on http://localhost:3001")
})