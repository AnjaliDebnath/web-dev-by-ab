// const http= require('http');
// const server= http.createServer((req,res)=> {
//     //take some action based on req and return the response
//     // console.log(url);
//     console.log(req.url,req.method);
//     res.setHeader('Content-type', 'text/plain');
//     res.statusCode= 200;
//     // res.write('<h1>hello, its is a response from server</h1>');
//     // res.write('<h1>hellooooo peoplleee, its is a response from server</h1>');
//     // res.end();

//     res.end('<h1>hello123, its is a response from server</h1>');
// });

// server.listen(3010, 'localhost', ()=> {
//     console.log('Server is listening on port 3010');
// });

//send html file instead of plain text
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
