const fs = require("fs");

function createData(props) {
  const dataToCreate = {
    name: props.name,
    age: props.age,
  };

  // JSON.stringify => ubah data dari Javascript ke format JSON
  fs.writeFileSync("./data/data.json", JSON.stringify(dataToCreate));
}

function getData() {
  const data = fs.readFileSync("./data/data.json", "utf-8");

  // JSON.parse => ubah data dari format JSON ke Javascript
  return JSON.parse(data);
}

module.exports = { createData, getData };
