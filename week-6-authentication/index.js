const express = require("express");
const jwt = require("jsonwebtoken")
const JWT_SECRET = "randomsai"
const app = express();
app.use(express.json());

const users = []

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed in"
    })
})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    let founduser = null;

    for (let i=0; i<users.length; i++){
        if (users[i].username == username && users[i].password == password){
            founduser= users[i]
        }
    }

    if (founduser){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        // founduser.token = token;

        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
})

app.get("/me", function(req,res){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username
    
    let founduser = null;

    for (let i=0; i<users.length; i++){
        if (users[i].username == username){
            founduser = users[i]  
        }
    }
    if (founduser) {
        res.json({
            username: founduser.username,
            password: founduser.password
        })
    }else {
        res.json({
            message: "token invalid"
        })
    }
})

app.listen(3000);