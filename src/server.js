const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

const PORT = process.env.PORT || 5000;

const users = [
  { name: "Jack" },
  { name: "Bec" },
  { name: "Kate" },
  { name: "Kevin" },
  { name: "Randal" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  if (users[userId]) {
    res.json(users[userId]);
  } else {
    res.json({ message: `User Not Found, userId ${userId}` });
  }
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
