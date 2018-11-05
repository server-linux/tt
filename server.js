const express = require('express');
const app = express();
app.get("/", (req, res)=>{
    res.send("a rest is a test but with an r");
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT);

console.log(`Listen on port ${PORT}`);
