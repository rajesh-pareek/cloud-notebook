const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const path = require("path");

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.use(express.json());


// Serve static files from the React build
app.use(express.static(path.join(__dirname, "/build")));

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Catch all routes and serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
