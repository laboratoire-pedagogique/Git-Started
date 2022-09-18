const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 4532;

app.use(cors());
app.use(express.static('client'));



server.listen(port,() => {
    console.log(`Server running on port ${port}.`)
})