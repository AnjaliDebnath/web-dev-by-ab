const fs = require('fs');
const existingFileName = 'web-dev summer camp\\Node\\files\\existing_file.txt';

fs.readFile(existingFileName,"utf-8", (err, data) => {
        console.log("Inside the callback function");
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            // console.log(data.toString());
            console.log(typeof data); // Uncomment this if you want to log the content of the file
        }
    });