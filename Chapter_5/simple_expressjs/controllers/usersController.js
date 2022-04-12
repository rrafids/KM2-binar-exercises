const getUsers = (req, res) => {
  const { name: userName } = req.query;

  res.send(`User yang kamu cari namanya ${userName}`);
};

const getUserById = (req, res) => {
  res.send("Mendapatkan data user dengan id");
};

const getUserStatus = (req, res) => {
  res.send("Selamat kamu admin, jadi bisa masuk");
};

const registerUser = (req, res) => {
  // 1. Ngecek email existence
  // 2. Store data ke database
}

module.exports = { getUsers, getUserById, getUserStatus };
