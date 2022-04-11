const express = require("express");
const app = express();

const PORT = 2000;

const userRepository = require("./repositories/usersRepository");

// Set View Engine
app.set("view engine", "ejs");

app.get("/users", (req, res) => {
  res.render("index", {
    users: userRepository.getUsers(),
  });
});

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});
