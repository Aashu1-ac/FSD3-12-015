import express from "express";



const app = express();

app.get("/",(req,res)=>{
//    res.send("Hello Express");
//res.send("<h1>Hello express</h1>");
res.send(`
    <h1>Hello espress</h1>
    <h2>welcome to express</h2>
    <h3>express is a frmaework of nodejs</h3>
    `);

});

app.get("/about",(req,res)=>{
    res.send("<h2>about pages</h2>");
});

app.get("/products",(req,res)=>{
    const products = {
        id: 1,
        name: "laptop",
      price: 50000
    };


res.send(products);
});








app.listen(4444,()=>console.log("prg1 is running at 4444"));
