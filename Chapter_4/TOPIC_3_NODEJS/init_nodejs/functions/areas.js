function triangleArea(alas, tinggi) {
  const result = (1 / 2) * alas * tinggi;

  return result;
}

function rectangleArea(sisi) {
  const result = sisi * sisi;

  return result;
}

module.exports = { triangleArea, rectangleArea };
