const isAdmin = (req, res, next) => {
  const { is_admin: isAdmin } = req.params;

  if (isAdmin === "true") {
    next();

    return;
  }

  res.status(401).send("Kamu bukan admin!");
};

module.exports = { isAdmin };
