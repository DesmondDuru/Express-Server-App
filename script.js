const express = required('express');
const app = express();
const port = 9876;
const h1 = "<h1>Let's see how this works!</h1>"
const img = ""

app.get("/", (req,res) => {
    // res.send(h1);
    res.send("Let's see how this works!");
})

app.listen(port, ()=>{
    console.log('Server active at http://localhost:${port}')
})