const http = require("http");
const path = require("path");
const fs = require("fs");

const HOST = "localhost";
const PORT = 8082;

const PUBLIC_DIRECTORY = path.join(__dirname, "public");

const onRequest = (req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      const htmlFileHome = path.join(PUBLIC_DIRECTORY, "index.html");
      const htmlHome = fs.readFileSync(htmlFileHome, "utf8");

      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(htmlHome);

      break;
    case "/register":
      const htmlFileRegister = path.join(PUBLIC_DIRECTORY, "register.html");
      const htmlRegister = fs.readFileSync(htmlFileRegister, "utf8");

      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(htmlRegister);

      break;

    case "/js/app.js":
      const appFile = path.join(PUBLIC_DIRECTORY, "app/app.js");
      const app = fs.readFileSync(appFile, "utf8");

      res.setHeader("Content-Type", "text/javascript");
      res.writeHead(200);
      res.end(app);

      break;
    case "/js/user.js":
      const userFile = path.join(PUBLIC_DIRECTORY, "app/user.js");
      const user = fs.readFileSync(userFile, "utf8");

      res.setHeader("Content-Type", "text/javascript");
      res.writeHead(200);
      res.end(user);

      break;
    case "/api/users":
      if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString(); // convert Buffer to string
        });
        req.on("end", () => {
          // JSON.stringify => ubah data dari Javascript ke format JSON
          fs.writeFileSync("./storage/user.json", body);

          res.setHeader("Content-Type", "application/json");
          res.writeHead(200);
          res.end("Berhasil mendaftarkan user");
        });
      }

      break;
  }
};

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
  console.log(`Server already listening on http://${HOST}:${PORT}`);
});
