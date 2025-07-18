const express = require("express");

const app = express();

app.get("/multiply/:a/:b", function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a*b
    })

})
app.get("/add/:a/:b", function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b) ;

    res.json({
        ans: a+b
    })

})
app.get("/sub/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    ans: a - b,
  });
});
app.get("/division/:a/:b", function (req, res) {
  const a = ParseInt(req.params.a);
  const b = ParseInt(req.params.b);

  res.json({
    ans: a / b,
  });
});

app.listen(3000);