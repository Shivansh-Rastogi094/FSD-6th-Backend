const fs = require('fs');

// const data = fs.readFile("./data.txt" , "utf-8" , (err,data) => {
fs.readFile("./data.txt" , "utf-8" , (err,data) => {
    try{

        console.log(data)
    }
    catch{
        console.log("error is",err)
    }
})

// console.log(data)