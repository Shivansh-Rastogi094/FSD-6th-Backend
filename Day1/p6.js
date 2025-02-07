const fs = require('fs');

const data = " yess broo i am appended one"

fs.appendFile("./data.txt" , data ,(err) => {
    if(err){
        console.log("error found " ,err)
    }
    else{
        console.log("successfull append")
    }
})