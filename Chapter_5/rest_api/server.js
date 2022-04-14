const express = require("express");
const app = express();
const PORT = 2000;

app.use(express.json());

// Import Controllers
const booksController = require("./controllers/booksController");

// Import Middleware
const { authenticate } = require("./middlewares/authentication");

// Define Routes
app.get("/books", booksController.getAll);
app.post("/books", authenticate, booksController.create);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});
