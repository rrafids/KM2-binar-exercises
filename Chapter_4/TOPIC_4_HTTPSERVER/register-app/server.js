const http = require("http");
const path = require("path");
const fs = require("fs");

const HOST = "localhost";
const PORT = 8082;

const PUBLIC_DIRECTORY = path.join(__dirname, "public");

const onRequest = (req, res) => {
  const urlRaw = req.url;
  const url = urlRaw.split("?")[0];
  const query = urlRaw.split("?")[1];

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
    case "/css/style.css":
      const cssFile = path.join(PUBLIC_DIRECTORY, "css/style.css");
      const css = fs.readFileSync(cssFile, "utf8");

      res.setHeader("Content-Type", "text/css");
      res.writeHead(200);
      res.end(css);

      break;
    // Setiap URL bisa nerima lebih dari 1 method (get, post, put dll)
    case "/api/users":
      if (req.method === "POST") {
        // Get payload body
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString(); // convert Buffer to string
        });
        req.on("end", () => {
          // Update data baru, data lama ga diapus
          const data = fs.readFileSync("./storage/user.json");
          let resp = JSON.parse(data);
          resp.push(body);

          // JSON.stringify => ubah data dari Javascript ke format JSON
          fs.writeFileSync("./storage/user.json", JSON.stringify(resp));

          res.setHeader("Content-Type", "application/json");
          res.writeHead(200);
          res.end("Berhasil mendaftarkan user");
        });
      } else if (req.method === "GET") {
        const queryValueName = query.split("=")[1];
        const data = fs.readFileSync("./storage/user.json");

        // JSON.parse => ubah data dari format JSON ke Javascript
        let resp = JSON.parse(data);

        resp = resp.filter((res) => {
          res = JSON.parse(res);

          return res.name === queryValueName;
        });

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(resp));
      }

      break;
  }
};

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
  console.log(`Server already listening on http://${HOST}:${PORT}`);
});
