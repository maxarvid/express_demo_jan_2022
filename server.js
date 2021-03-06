const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  let action;
  console.table(request.query);
  if (request.query.action === "work") {
    action = "Hope you have a great day at work";
  } else {
    action = "It's nice to spend some time off";
  }
  const greeting = request.query.name || "unknown person";
  response.send(`<h1>hello ${greeting}! ${action}!!</h1>`);
});

app.get("/test", (request, response) => {
  response.send('<h2 style="color: red">Hello new route</h2>');
});

app.listen(port, () => {
  console.log("The server is up and running!");
});
