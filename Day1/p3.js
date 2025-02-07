const fs = require('fs');

const data = "Im new Data file";

fs.writeFileSync("data.txt",data);  //Writing new data and updating the data.txt file