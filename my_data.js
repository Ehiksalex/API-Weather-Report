const express =  require("express");

const app = express();
const port = 3001;

app.listen(port, (req, res)=>{
    console.log(`server running on: ${port}`);
    //console.log(__dirname);
});

const data = {
    name: "Alexandra",
    prof: "Electrical Engineer",
    Year: 2
}

app.get("/", (req, res)=>{
    res.send(data)
});