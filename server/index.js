const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

const User = require("./models/student");

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
const Mongo = process.env.MONGO;
mongoose.connect(Mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get("/display", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

app.post("/signup", async (req, res) => {
  const { firstName, secondName, fatherName, email, password } = req.body;
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@gmail\.com$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ firstName, secondName, fatherName, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.password === password) {
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(400).json({ message: "Incorrect password" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get('/edit/:id', (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.put('/edit/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, secondName, email, password } = req.body;
  User.findByIdAndUpdate(id, { firstName, secondName, email, password })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User deleted successfully', user });
    })
    .catch(err => res.status(500).json({ message: 'Error deleting user' }));
});

app.listen(5500, () => 
    console.log("Server running on port 5500"));
