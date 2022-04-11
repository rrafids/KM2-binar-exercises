const express = require("express");
const app = express();
const PORT = 2000;

// Import Controllers
const usersController = require("./controllers/usersController");

// Import Middlewares
const authorization = require("./middlewares/authorization");

app.get("/users", usersController.getUsers);
app.get("/users/:id", usersController.getUserById);

// Protected Route (Middleware Implemented)
app.get(
  "/users/:is_admin/admins",
  authorization.isAdmin,
  usersController.getUserStatus
);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});
