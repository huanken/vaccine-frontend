const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 8080; //Line 3
const path = require('path'); //Line 1

if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname + '/public'));
    app.get('/', function(req, res) {

        // ejs render automatically looks in the views folder
        res.render('index');
    });
}

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

