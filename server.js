//server creation
//1. http module
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("request access has been made from browser to server");
    console.log(req);
});

//port no, host, callback function
server.listen(3000,'localhost',()=>{
    console.log("server is listening to port 3000");
});