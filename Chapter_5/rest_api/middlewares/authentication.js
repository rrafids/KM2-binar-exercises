const authenticate = async (req, res, next) => {
  const tokenBearer = req.get("Authorization"); // output Bearer ${id}-${email}

  if (tokenBearer) {
    next();

    return;
  }

  res.status(401).send("Silakan login terlebih dahulu");

  return;
};

module.exports = { authenticate };
