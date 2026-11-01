# Express
Fast,unopinionated

## step
1.create project folder
2. create two folders(frontend,backend) in root (labs)
3. open terminal and reach to backend by
```


cd ..
cd lab5
cd backend
```

4. type `npm init -y`
5. install nodemon `npm i nodemon -D`
6. install express `npm i express`
7. update backend/package.json
         -change type `type:"module"`
         -change script 
         ```

         script:{
            "start":"node app.js",
            "dev":"nodemon prg1.js"      
         }
            ```

8. add `lab5/backend/node_module` to.gitignore
9. create prg1.js file
10. write the script below to start express server 

            ```

            import  express from "express"
    const app =express();
    app.get("/",(req,res)=>{
        res.send("Hello Express");
    });


    app.listen(4444, () => console.log(`prg1 is running at 4444`));
           
            ```