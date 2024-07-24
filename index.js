const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mytestdb').then(() => {
  console.log('MongoDB connected...');
}).catch(err => {
  console.error('Connection error', err.message);
});

// Define a simple User model
const User = require('./models/User');

app.get('/', async (req, res) => {
  const users = await User.find();
  res.render('index', { users });
});

app.post('/add-user', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

