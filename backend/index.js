const express = require("express");
const getData = require("./controllers/userController");
const http = require("http");
const cors = require("cors");
const app = express();
const port = 4500 || process.env.PORT;

app.use(cors())
app.use(express.json());
const server = http.createServer(app);

app.get("/item", getData);

server.listen(port, () => {
  console.log(`app is listing in port http://localhost:${port}`);
});
