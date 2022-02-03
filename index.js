const express = require("express");
const format = require("date-format");
const app = express();

const PORT = process.env.PORT ||4000 ;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World!</h1>");
});



app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "Ajmal Shaikh",
    followers: 66,
    follows: 70,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  res.status(200).json(instaSocial);
});
app.get("/api/v1/facebook", (req, res) => {
  const faceSocial = {
    username: "Afzal Shaikh",
    followers: 66,
    follows: 70,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  res.status(200).json(faceSocial);
});
app.get("/api/v1/linkedin", (req, res) => {
  const linkedSocial = {
    username: "Aamir Shaikh",
    followers: 66,
    follows: 70,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  res.status(200).json(linkedSocial);
});

app.get("/api/v1/:token",(req,res)=>{
  console.log(req.params.token);
  res.status(200).json({
    param:req.params.token
  })
})

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
