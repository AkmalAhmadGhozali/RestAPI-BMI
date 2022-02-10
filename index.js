const express = require("express")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req,res) => {
    res.send("Penghitungan BMI")
})


app.post("/bmi", (req,res) => {
    let t = req.body.tinggi
    let b = req.body.berat
    let bmi = b / (t*t)
    hasil = bmi.toFixed(1);
    let status
    
    if(hasil < 18.5){
        status = ("kekurangan berat badan")
    }else if(hasil >= 18.5 && hasil <= 24.9 ){
        status = ("normal (ideal)")
    }else if(hasil >= 25 && hasil <= 29.9){
        status = ("kelebihan berat badan")
    }else if(hasil >= 30){
        status = ("kegemukan (obesitas)")
    }

    res.send({
        tinggi : t,
        berat : b,
        bmi : hasil,
        status : status,

    })
})

const port = 8888
app.listen(port, () => console.log (`app running ${port}`))