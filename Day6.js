// File module : fs module in node js
//CRUD operations: Create, Read, Update, Delete
// CReate a file: writefile() and readfile()
const fs=require('fs');
fs.writeFile('myfile.txt','',(err)=>{
    if(err) throw err;
    console.log('File created successfully');

})