const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 8080; //Line 3


if(process.env.NODE_ENV === "production"){
    app.use(express.static('build'))
    app.get('*',(req, res) => {
        req.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

