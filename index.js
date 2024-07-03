const fs=require('fs');
const path = require('path');

const data = fs.readFileSync('file.txt');

console.log(""+ data);

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    if(req.url === '/login') {
        fs.readFile('login.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    } else {
        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}/`);
});