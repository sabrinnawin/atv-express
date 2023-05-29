const express = require("express");
const app = express();

let contador = 0;
let contadoincrementar1 = 0;
let contadoincrementar5 = 0;


app.get("/incrementar1", function (req, res) {
    contador++;
    contadoincrementar1++;
  res.send({contador});
});

app.get("/incrementar5", function (req, res) {
    contador+=5;
    contadoincrementar5++;
  res.send({contador});
});

app.get("/contador", function (req, res) {
  res.send({ contador });
});
app.get("/relatorio", function (req, res) {
  res.send({ contador, contadoincrementar1,contadoincrementar5});
});

app.listen(3000);