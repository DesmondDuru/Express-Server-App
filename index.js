const express = require('express')
const app = express()
const port = 3000

const userRoutes = require("./routes/user")
app.use('/user', userRoutes)

app.get("/", (req, res) =>{
    res.send("This is our home page")
})



app.get("/about", (req, res) =>{
    res.send("This is where the about page would be")
})




app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`);
})