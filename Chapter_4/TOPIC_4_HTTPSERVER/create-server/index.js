const http = require("http");
const fs = require("fs");
const path = require("path");

const HOST = "127.0.0.1";
const PORT = "8082";
const PUBLIC_DIRECTORY = path.join(__dirname, "public");

function onRequest(req, res, next) {
  const urlRaw = req.url;
  const url = urlRaw.split("&")[0];
  const query = urlRaw.split("&")[1];

  switch (url) {
    case "/":
      const htmlFileHome = path.join(PUBLIC_DIRECTORY, "index.html");
      const htmlHome = fs.readFileSync(htmlFileHome, "utf8");

      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(htmlHome);
      break;
    case "/login":
      const htmlFileLogin = path.join(PUBLIC_DIRECTORY, "login.html");
      const htmlLogin = fs.readFileSync(htmlFileLogin, "utf8");

      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(htmlLogin);
      break;
    case "/json":
      const person = {
        name: "John",
        age: 34,
      };

      const personJSON = JSON.stringify(person);

      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(personJSON);
      break;
    case "/search":
      const queryResult = query.split("=")[1];

      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(`Halaman Pencarian: ${queryResult}`);
      break;
    default:
      break;
  }
}

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
  console.log(`Server berjalan di http://${HOST}:${PORT}`);
});
