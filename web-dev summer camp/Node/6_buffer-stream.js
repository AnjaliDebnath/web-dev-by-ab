//reading a stream
// const fs = require('fs');
// const fileName = 'web-dev summer camp/Node/files/bigFile.txt';

// // const readStream= fs.createReadStream(fileName, 'utf-8');
// const readStream= fs.createReadStream(fileName, {encoding: 'utf8', highWaterMark: 1024});

// let counter=0;

// readStream.on('data', (chunk)=>{
//     console.log('\n\n*****************New chunk Received:');
//     console.log(chunk);
//     console.log("counter:",counter++);

// });


//writing a stream
// const fs = require('fs');
// const writeFile=  'web-dev summer camp/Node/files/writeFile.txt';
// const writeStream = fs.createWriteStream(writeFile);
// writeStream.write('hello, this a new line\n');
// writeStream.write('welcome to my code\n');


//Q: function to read a file using readstream and write another using writestream
// const fs = require('fs');
// const fileName = 'web-dev summer camp/Node/files/bigFile.txt';

// // const readStream= fs.createReadStream(fileName, 'utf-8');
// const readStream= fs.createReadStream(fileName, {encoding: 'utf8'});

// let counter=0;

// readStream.on('data', (chunk)=>{
//     console.log('\n\n*****************New chunk Received:');
//     console.log(chunk);
    
//     console.log("counter:",counter++);

// });

//pipe
const fs = require('fs');
const fileName = 'web-dev summer camp/Node/files/bigFile.txt';

const readStream = fs.createReadStream(fileName, {encoding: 'utf8'});
const writeStream = fs.createWriteStream('web-dev summer camp/Node/files/writeFile.txt');
readStream.pipe(writeStream);














