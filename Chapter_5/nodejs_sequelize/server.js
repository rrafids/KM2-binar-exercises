const express = require("express");
const app = express();
const PORT = 2000;

app.use(express.json());

// Import Controllers
const usersController = require("./controllers/usersController");

// Define Routes
app.get("/users", usersController.getAll);
app.post("/users", usersController.create);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});
