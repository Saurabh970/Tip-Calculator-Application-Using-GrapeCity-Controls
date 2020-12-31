const express = require('express');
const app = express();
const PORT = 4400;
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(cors());


app.post('/',(req,res)=>{ 
    const tipData = req.body;
    fs.readFile('./DB/tips.json', function (err, data) {
        if(err)
        {
                console.log("Error reading file " + err);
                res.send({status: "Data Not Saved!!!"});
        }
        else
        {
            var dbData = JSON.parse(data)
            dbData.tipData.push(tipData);

            fs.writeFile('./DB/tips.json', JSON.stringify(dbData), (err) => {
            if(err)
                console.log("Write error");
            else
                console.log("Successfully Write");
            });
            res.send({status: "Data Saved Successfully!"});
        }
    })
});

app.listen(PORT, ()=> {
    console.log(`cors-enabled web server starting at PORT ${PORT}`);
});