import express from "express";
const app = express();
app.use(express.json());
let users = [
  {
    id:1,
    name:"priyanka",
    email:"priyanka@gmail.com"
  }];
  app.get("/users",(req,res)=>{
    res.json(users);
  });

  //POst request to create a new user
  app.post("/users",(req,res)=>{
    const user ={
        id:users.length + 1,
        name:req.body.name,
        email:req.body.email,
    };
    users.push(user);
    res.json(user);
  });
  app.listen(8000,()=>{
    console.log("Server is running on port 8000");
  });