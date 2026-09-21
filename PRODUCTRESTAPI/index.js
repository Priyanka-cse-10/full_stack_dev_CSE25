import express from 'express';
import product from './product.json'
import cors from 'cors';
import fs from 'fs';
const app = express();

app.use(express.json());
app.use (cors());
app.use(express.json());
//get product
app.get("/product",(req,res)=>{
const data=fs.readFile("product.json")
const products=json.parse(data);
res.json(products);
});
//update product 
app.post("api/product",()=>{
    const data=fs.readFile("product.json", "utf-8")
    const products=json.parse(data);
    const newProduct={
        id:products.length+1,
        name:req.body.name,
        price:req.body.price
    }
});
products.push(newProduct)
fs.writeFile("product.json",json.stringify(newProduct))
app.listen(()=>{
    console.log("server is running on port 5000")
})