const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const getUsers = require("./api/getUsers"); // Import the getUsers module
const postUser = require("./api/postUsers"); // Import the postUser module
const deleteUser = require("./api/deleteUsers"); // Import the deleteUser module
const updateUser = require("./api/updateUser"); // Import the updateUser module

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Use the getUsers, postUser, and deleteUser routers
app.use("/api", getUsers);
app.use("/api", postUser);
app.use("/api", deleteUser);
app.use("/api", updateUser);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
