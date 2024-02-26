var http = require('http');

function data(a) {
    return [a, a * 10];
}

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json'); // Set Content-Type header to indicate JSON data
    const result = data(11);
    response.end(JSON.stringify(result)); // Convert array to JSON string and send as response
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');