// File module : fs module in node js
//CRUD operations: Create, Read, Update, Delete
// CReate a file: writefile() and readfile()
const fs=require('fs');
fs.writeFile('myfile.txt','',(err)=>{
    if(err) throw err;
    console.log('File created successfully');
// read file:readfile()
  const fs=require('fs');
  fs.readFile('myfile.txt',(err,res)=>{
    if(err){
        console.log("error:",err);
    }else{
        console.log()
    }


  })
