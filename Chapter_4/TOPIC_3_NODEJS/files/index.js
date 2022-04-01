const { getData, createData } = require("./functions/files");

const payload = {
  name: "lkj",
  age: 50,
};

createData(payload);

const data = getData();

console.log(data.name);
