const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import Controllers
const authController = require("./controllers/authController");
const postsController = require("./controllers/postsController");
const usersController = require("./controllers/usersController");

// Import Midleware
const middleware = require("./middlewares/auth");

// Define Routes
// Auth
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);

// Posts
app.post("/posts", middleware.authenticate, postsController.create);
app.delete("/posts/:id", middleware.authenticate, postsController.deleteByID);
app.put("/posts/:id", middleware.authenticate, postsController.updateByID);

app.get("/users/:id/posts", usersController.getPostsByID);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});
