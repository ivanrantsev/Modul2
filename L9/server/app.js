let express = require("express");
let app = express(); //http://localhost:8080/
app.use(express.static("public"));
app.listen(8080);