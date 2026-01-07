const  express = require("express")  // importing express
const path = require("path")   // importing path


const app = express()    // creating express app
const port = 3000    // port number

// Middleware

app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public","index.html"))
})

app.get("/contact", (req, res)=>{
    res.sendFile(path.join(__dirname, "public","contact.html"))
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})