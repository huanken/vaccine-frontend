const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 8080; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6