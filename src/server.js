const express = require("express");

const app = express();

app.use(express.json());

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

app.post("/users", (req, res) => {
  const user = req.body;

  users.push(user);

  res.json(users);
});

app.put("/users/:userId", (req, res) => {
  const newUser = req.body;
  const userId = req.params.userId;

  if (users[userId]) {
    users[userId] = newUser;
  } else {
    return res.json({ message: `user not found, userId ${userId}` });
  }

  res.json(users);
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
