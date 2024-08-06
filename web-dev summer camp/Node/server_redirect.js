const http = require('http');
const fs = require('fs');

// const fileName = 'linkFile.html'; // Define the fileName variable

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    let path='linkFile.html';
    switch(req.url){
        case '/':
            path= '../tests/form.html';
            res.statusCode=200;
            break;
        case '/about':
            path= '../forms/Restro-form2.html';
            res.statusCode=200;
            break;
        case '/aboutme':
            res.statusCode=301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path= 'linkFile3Error.html';
            res.statusCode=404;
            

    }
    fs.readFile(path, (err, data) => {
        if (err) {
            res.statusCode = 404;
            console.log(err);
            res.end('Error reading the file');
        } else {
            res.statusCode = 200;
            res.write(data);
            res.end();
        }
    });
});
server.listen(3010, 'localhost' ,() => {
    console.log('Server is listening on port 3010');
});
