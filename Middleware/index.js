const express = require('express');

const app = express();

// function isOldEnough(age){
//     if (age >= 14) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age >= 14){
        next();
    } else {
        res.json({
            msg: "Sorry you are not old enough"
        })
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1",  function(req,res) {
    res.json({
           msg: "Successfully completed Ride 1",
         });
})


app.get("/ride2",  function(req,res) {
    res.json({
           msg: "Successfully completed Ride 2",
         });
})



app.listen(3000);