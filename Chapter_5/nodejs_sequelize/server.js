const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import Controllers
const usersController = require("./controllers/usersController");
const usersService = require("./services/usersService");

// View
// Set View Engine
app.set("view engine", "ejs");

app.get("/register", async (req, res) => {
  const { name } = req.query;
  const getUsers = await usersService.getAll({ name });

  res.render("index", {
    users: getUsers,
  });
});

// Define Routes
// app.get("/users", usersController.getAll);
// app.get("/users/:id/posts", usersController.getByUserId);
app.post("/users", usersController.create);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});
