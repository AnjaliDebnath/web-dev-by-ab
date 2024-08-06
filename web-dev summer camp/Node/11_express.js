const express= require('express');
const server= express();

server.listen(3040, 'localhost', ()=>{
    console.log("server started");
});

server.get('/', (req,res) =>{
    res.sendFile('C:/web dev by ab/web-dev summer camp/Node/linkFile.html');
});

server.get('/about',(req,res)=>{
    res.sendFile('C:/web dev by ab/web-dev summer camp/Node/linkFile2.html');
});

server.use((req,res)=>{
    res.sendFile('C:/web dev by ab/web-dev summer camp/Node/linkFile3Error.html');
})

