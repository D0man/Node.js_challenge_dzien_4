const http = require('http');

const srv = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Hello, World from back-end!</h1>");
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});