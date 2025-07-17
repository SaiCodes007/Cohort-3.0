const express = require("express");

const app = express();

const users = [{
    name : "John",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/" , function(req,res){
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length ;
    let noOfHealthyKidneys = 0;
    for(let i = 0; i< noOfKidneys; i++){
        if (johnKidneys[i].healthy){
            noOfHealthyKidneys += 1;
        }
    }
    const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnHealthyKidneys
    })
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg : "Done"
    })
})

app.put("/", function(req,res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.listen(3000);