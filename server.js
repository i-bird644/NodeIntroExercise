const http = require("http");

http.createServer((request, response) => { 

    response.end("Hey, My First Node Server");
})
.listen(5555, () => { 
    
    console.log("Server is now listening on port 5555");
});