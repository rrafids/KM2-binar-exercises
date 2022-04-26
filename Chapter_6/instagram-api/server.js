const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import Controllers
const authController = require("./controllers/authController");

// Define Routes
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});
