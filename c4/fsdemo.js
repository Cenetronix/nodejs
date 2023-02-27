const { create } = require("domain");
const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname,"/test1"),{},err => {
//     if (err) throw err;
//     console.log("folder is created");
// }); 

// fs.writeFile(path.join(__dirname, "test1", "hello.txt"),"Hello World!!!", err => {
//     if (err) throw err;
//     console.log("file was created");
// })

// fs.appendFile(path.join(__dirname, "test1", "hello.txt"), " i love node.js!!! and GAY IS NOT OK " , err => {
//     if(err) throw err;
//     console.log("file was appendet");
// })

// fs.readFile(path.join(__dirname, "test1", "hello.txt"), "utf-8", (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
fs.rename(path.join(__dirname, "test1", "hello.txt"), "hello_preimenuvan", err =>{
    if (err) throw err;
    console.log("the file has been renamed");
})

