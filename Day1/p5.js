const { log } = require('console');
const fs=require('fs');
const data="im in async func";

fs.writeFile("./data.txt",data,(err)=>{

    if(err)
        console.error("Error writing file",err);
    else
        console.log("File Written Successfully");
        
})