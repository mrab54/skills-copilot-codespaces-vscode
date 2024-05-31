// Create web server
// Create a route for comments
// When the route is visited, the server should respond with a JSON response with a message key and a value of "Comments route"

// Import the express library
const express = require("express");

// Create a new web server
const app = express();

// Create a route for comments
app.get("/comments", (req, res) => {
  res.json({ message: "Comments route" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});