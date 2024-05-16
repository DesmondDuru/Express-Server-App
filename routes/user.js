const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log("User request made");
    next()
})

router.route("/")
    .get((req,res) =>{
        res.send("You made it to the base user page")
    })

router.get('/admin', (req, res)=>{
    res.send(`You made it to user admin page`)
})

module.exports = router